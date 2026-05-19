import { NextResponse, NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '../../../../prisma/client';

// GET - Récupérer les ressources (filtrées par groupe ou par étudiant)
export async function GET(req: Request) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const groupId = searchParams.get('groupId');
  const studentId = searchParams.get('studentId');
  const validation = searchParams.get('validation');
  const groupsIds=searchParams.get('groupsIds'); 

  try {
    const where: any = {};
    
    if (groupId) {
      where.groupId = parseInt(groupId);
    }
    
    if (studentId) {
      where.studentId = parseInt(studentId);
    }
    
    if (validation) {
      where.validation = validation;
    }
   if(validation || studentId || groupId ){
    const resources = await prisma.resources.findMany({
      where,
      include: {
        student: {
          select: { Mat: true, name: true, profile: true },
        },
        group: {
          select: { id: true, name: true, type: true },
        },
      },
      orderBy: { uploadedAt: 'desc' },
    });
     return NextResponse.json(resources);
  }else{
    if(groupsIds){
     const resources = await prisma.resources.findMany({
      where: { groupId: { in: groupsIds.split(',').map((id) => parseInt(id)) } },
      include: {
        student: {
          select: { Mat: true, name: true, profile: true },
        },
        group: {
          select: { id: true, name: true, type: true },
        },
      },
      orderBy: { uploadedAt: 'desc' },
    });
 return NextResponse.json(resources);
    }else{
     const resources = await prisma.resources.findMany({
      where: { validation: 'waiting' },
      include: {
        student: {
          select: { Mat: true, name: true, profile: true },
        },
        group: {
          select: { id: true, name: true, type: true },
        },
      },
      orderBy: { uploadedAt: 'desc' },
    });
    return NextResponse.json(resources);
    }
  }
  } catch (error) {
    console.error('Erreur récupération ressources:', error);
    return NextResponse.json({ error: 'Erreur lors de la récupération des ressources' }, { status: 500 });
  }
}

// POST - Créer une nouvelle ressource (upload de fichier)
export async function POST(req: NextRequest) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const groupId = formData.get('groupId') as string;
    const fileName = formData.get('fileName') as string;
   // const studentId =   session.user.id;

    if (!file ) {
      return NextResponse.json(
        { error: 'Fichier et groupId requis' },
        { status: 400 }
      );
    }
   const student = await prisma.student.findUnique({
      where: { email: session.user.email! },
    });

    if (!student) {
      return NextResponse.json({ error: 'Étudiant introuvable' }, { status: 404 });
    }
const permission =await prisma.system_group_permission.findUnique({
  where:{groupId:parseInt(groupId),},
});
 if(permission!.maxFileSizeMB<40){
  return NextResponse.json({error: `La taille maximale autorisée est de ${permission!.maxFileSizeMB} MB`}, { status: 400 });
 }
    // Obtenir l'étudiant actuel
    

    // Vérifier que l'étudiant appartient au groupe
  /*  const groupMember = await prisma.groupMembers.findUnique({
      where: {
        studentId_groupId: {
          studentId: student.Mat,
          groupId: parseInt(groupId),
        },
      },
    });

    if (!groupMember) {
      return NextResponse.json(
        { error: 'Vous n\'appartenez pas à ce groupe' },
        { status: 403 }
      );
    }*/

    const { writeFile, mkdir } = await import('fs/promises');
    const path = await import('path');

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), 'public/uploades/resources');
    await mkdir(uploadDir, { recursive: true });

    const uniqueName = `${Date.now()}-${file.name.replaceAll(' ', '_')}`;
    const filePath = path.join(uploadDir, uniqueName);

    await writeFile(filePath, buffer);

    const resource = await prisma.resources.create({
      data: {
        name: fileName || file.name,
        filepath: `/uploades/resources/${uniqueName}`,
        size: file.size,
        studentId: student.Mat,
        groupId: parseInt(groupId),
        fileType: file.type,
        mimeType: '40',
        validation: 'waiting',
      },
      include: {
        student: {
          select: { Mat: true, name: true, profile: true },
        },
        group: {
          select: { id: true, name: true, type: true },
        },
      },
    });

    return NextResponse.json(resource, { status: 201 });
  } catch (error) {
    console.error('Erreur upload ressource:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'upload' }, { status: 500 });
  }
}

// PUT - Mettre à jour une ressource (validation/status)
export async function PUT(req: Request) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  try {
    const { id, validation } = await req.json();

    if (!id || !validation) {
      return NextResponse.json(
        { error: 'id et validation requis' },
        { status: 400 }
      );
    }

    // Vérifier que c'est l'admin ou propriétaire
    const resource = await prisma.resources.findUnique({
      where: { id: parseInt(id) },
      include: { student: true },
    });

    if (!resource) {
      return NextResponse.json({ error: 'Ressource introuvable' }, { status: 404 });
    }

    const student = await prisma.student.findUnique({
      where: { email: session.user.email! },
    });

    if (!student || (resource.studentId !== student.Mat && student.role !== 'admin')) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 403 }
      );
    }

    const updatedResource = await prisma.resources.update({
      where: { id: parseInt(id) },
      data: { validation },
      include: {
        student: {
          select: { Mat: true, name: true, profile: true },
        },
        group: {
          select: { id: true, name: true, type: true },
        },
      },
    });

    return NextResponse.json(updatedResource);
  } catch (error) {
    console.error('Erreur mise à jour ressource:', error);
    return NextResponse.json({ error: 'Erreur lors de la mise à jour' }, { status: 500 });
  }
}

// DELETE - Supprimer une ressource
export async function DELETE(req: Request) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const resourceId = searchParams.get('id');

    if (!resourceId) {
      return NextResponse.json({ error: 'id requis' }, { status: 400 });
    }

    const resource = await prisma.resources.findUnique({
      where: { id: parseInt(resourceId) },
      include: { student: true },
    });

    if (!resource) {
      return NextResponse.json({ error: 'Ressource introuvable' }, { status: 404 });
    }

    const student = await prisma.student.findUnique({
      where: { email: session.user.email! },
    });

    if (!student || (resource.studentId !== student.Mat && student.role !== 'admin')) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 403 }
      );
    }

    // Supprimer le fichier
    try {
      const { unlink } = await import('fs/promises');
      const path = await import('path');
      const filePath = path.join(process.cwd(), 'public', resource.filepath);
      await unlink(filePath);
    } catch (err) {
      console.error('Erreur suppression fichier:', err);
    }

    await prisma.resources.delete({
      where: { id: parseInt(resourceId) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur suppression ressource:', error);
    return NextResponse.json({ error: 'Erreur lors de la suppression' }, { status: 500 });
  }
}
