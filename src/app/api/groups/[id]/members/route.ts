import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '../../../../../prisma/client';

// GET - Récupérer les membres d'un groupe avec leurs ressources
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  try {
    const groupId = parseInt(params.id);

    const group = await prisma.groups.findUnique({
      where: { id: groupId },
      include: {
        studentGroups: {
          include: {
            student: {
              select: {
                Mat: true,
                name: true,
                email: true,
                profile: true,
                resources: {
                  where: { groupId: groupId },
                  include: { student: true },
                },
              },
            },
          },
        },
        groupMembers: {
          include: {
            student: {
              select: {
                Mat: true,
                name: true,
                email: true,
                profile: true,
              },
            },
          },
        },
      },
    });

    if (!group) {
      return NextResponse.json({ error: 'Groupe introuvable' }, { status: 404 });
    }

    return NextResponse.json({
      group,
      members: group.studentGroups,
      groupMembers: group.groupMembers,
    });
  } catch (error) {
    console.error('Erreur récupération membres:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des membres' },
      { status: 500 }
    );
  }
}

// POST - Ajouter un membre au groupe
export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  try {
    const groupId = parseInt(params.id);
    const { studentId, role = 0, status = 1 } = await req.json();

    if (!studentId) {
      return NextResponse.json(
        { error: 'studentId requis' },
        { status: 400 }
      );
    }

    // Vérifier que le groupe existe
    const group = await prisma.groups.findUnique({
      where: { id: groupId },
    });

    if (!group) {
      return NextResponse.json({ error: 'Groupe introuvable' }, { status: 404 });
    }

    // Vérifier que l'étudiant existe
    const student = await prisma.student.findUnique({
      where: { Mat: parseInt(studentId) },
    });

    if (!student) {
      return NextResponse.json({ error: 'Étudiant introuvable' }, { status: 404 });
    }

    // Vérifier l'autorisation (créateur ou admin)
    const currentStudent = await prisma.student.findUnique({
      where: { email: session.user.email! },
    });

    if (!currentStudent) {
      return NextResponse.json({ error: 'Utilisateur introuvable' }, { status: 404 });
    }

    // Ajouter le membre au groupe
    const member = await prisma.student_group.create({
      data: {
        studentId: parseInt(studentId),
        groupId: groupId,
      },
      include: {
        student: {
          select: {
            Mat: true,
            name: true,
            email: true,
            profile: true,
          },
        },
      },
    });

    // Créer aussi une entrée dans groupMembers
    await prisma.groupMembers.create({
      data: {
        studentId: parseInt(studentId),
        groupId: groupId,
        role,
        status,
        date_adhesion: new Date(),
      },
    });

    return NextResponse.json(member, { status: 201 });
  } catch (error: any) {
    console.error('Erreur ajout membre:', error);
    
    // Erreur d'unicité (membre déjà dans le groupe)
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'L\'étudiant appartient déjà à ce groupe' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Erreur lors de l\'ajout du membre' },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer un membre du groupe
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  try {
    const groupId = parseInt(params.id);
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get('studentId');

    if (!studentId) {
      return NextResponse.json(
        { error: 'studentId requis' },
        { status: 400 }
      );
    }

    const parsedStudentId = parseInt(studentId);

    // Vérifier que le groupe existe
    const group = await prisma.groups.findUnique({
      where: { id: groupId },
    });

    if (!group) {
      return NextResponse.json({ error: 'Groupe introuvable' }, { status: 404 });
    }

    // Supprimer le membre du groupe
    await prisma.student_group.delete({
      where: {
        studentId_groupId: {
          studentId: parsedStudentId,
          groupId: groupId,
        },
      },
    });

    // Supprimer aussi de groupMembers
    await prisma.groupMembers.deleteMany({
      where: {
        studentId: parsedStudentId,
        groupId: groupId,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Erreur suppression membre:', error);

    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Membre introuvable dans ce groupe' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: 'Erreur lors de la suppression du membre' },
      { status: 500 }
    );
  }
}
