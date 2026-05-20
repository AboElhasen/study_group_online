import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import prisma from '../../../../prisma/client';

export async function GET(req: Request) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const groupId = searchParams.get('id');

  if (groupId) {
    const group = await prisma.groups.findUnique({
      where: { id: parseInt(groupId) },
    });

    if (!group) {
      return NextResponse.json({ error: 'Groupe introuvable' }, { status: 404 });
    }

    return NextResponse.json(group);
  }

  const groups = await prisma.groups.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(groups);
}

export async function POST(req: Request) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  const { name, description, type } = await req.json();

  if (!name || !description || !type) {
    return NextResponse.json({ error: 'Nom, description et type requis' }, { status: 400 });
  }

  try {
    const group = await prisma.groups.create({
      data: {
        visibility:'public',
        name,
        description,
        type,
      },
    });
   
    await prisma.groupMembers.create({
      data:{
        studentId:1,
        groupId:group.id,
        role:'admin',
        status:'accept',
      }
    })
    return NextResponse.json(group, { status: 201 });
  } catch (error) {
    console.error('Erreur création groupe', error);
    return NextResponse.json({ error: 'Impossible de créer le groupe' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  const { id, name, description, type } = await req.json();
  if (!id || !name || !description || !type) {
    return NextResponse.json({ error: 'id, nom, description et type requis' }, { status: 400 });
  }

  try {
    const group = await prisma.groups.update({
      where: { id: parseInt(id) },
      data: {
        name,
        description,
        type,
      },
    });

    return NextResponse.json(group);
  } catch (error) {
    console.error('Erreur mise à jour groupe', error);
    return NextResponse.json({ error: 'Impossible de mettre à jour le groupe' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const groupId = searchParams.get('id');
  if (!groupId) {
    return NextResponse.json({ error: 'id du groupe requis' }, { status: 400 });
  }

  const id = parseInt(groupId);

  try {
    await prisma.$transaction([
      prisma.message.deleteMany({ where: { groupId: id } }),
      prisma.notification.deleteMany({ where: { groupId: id } }),
      prisma.resources.deleteMany({ where: { groupId: id } }),
      prisma.groupMembers.deleteMany({ where: { groupId: id } }),
      prisma.groups.delete({ where: { id } }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur suppression groupe', error);
    return NextResponse.json({ error: 'Impossible de supprimer le groupe' }, { status: 500 });
  }
}
