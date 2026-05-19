// app/api/message/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import  prisma from '../../../../prisma/client'; // Ajustez le chemin

declare global {
  var io: any;
}

// GET - Récupérer les messages entre deux utilisateurs
export async function GET(req: Request) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const receiverId = searchParams.get('receiver');
  const groupId = searchParams.get('group') || null;

  const senderId = session.user.id;

  if (groupId) {
    const group = parseInt(groupId);
    const messages = await prisma.message.findMany({
      where: { groupId: group },
      include: {
        resource:true,
        sender: {
          select: { Mat: true, name: true, profile: true },
        },
        receiver: {
          select: { Mat: true, name: true },
        },
      },
      orderBy: { createdAt: 'asc' },
      take: 100,
    });

    return NextResponse.json(messages);
  }

  if (!receiverId) {
    return NextResponse.json({ error: 'receiverId requis' }, { status: 400 });
  }

  const receiver = parseInt(receiverId);

  const messages = await prisma.message.findMany({
    where: {
      OR: [
        { receiverId: senderId, senderId: receiver },
        { receiverId: receiver, senderId: senderId },
      ],
    },
    include: {
      resource:true,
      sender: {
        select: { Mat: true, name: true, profile: true },
      },
      receiver: {
        select: { Mat: true, name: true },
      },
    },
    orderBy: { createdAt: 'asc' },
    take: 100,
  });

  return NextResponse.json(messages);
}

// PUT - Marquer les messages comme lus
/*export async function PUT(req: Request) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  const { senderId } = await req.json();

  if (!senderId) {
    return NextResponse.json({ error: 'senderId requis' }, { status: 400 });
  }

  const userId = session.user.id;

  try {
    await prisma.message.updateMany({
      where: {
        senderId: parseInt(senderId),
        receiverId: userId,
        isRead: false,
      },
      data: {
        isRead: true,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json({ error: 'Erreur lors de la mise à jour' }, { status: 500 });
  }
}*/

// POST - Envoyer un message (texte ou fichier)
export async function POST(req: Request) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  const { sender, receiver, groupId, content, type, fileUrl, fileName, fileSize } = await req.json();

  if (!sender || !content || !type || (!receiver && !groupId)) {
    return NextResponse.json({ error: 'Données de message incomplètes' }, { status: 400 });
  }

  try {
    // Si c'est un fichier, créer une entrée dans resources
    let resources_id = null;
    
    if (fileUrl && (type === 'image' || type === 'file' )) {
      const resource = await prisma.resources.create({
        data: {
          name: fileName || content.substring(0, 50),
          filepath: fileUrl,
          size: fileSize || 0,
          studentId: sender,
          groupId: groupId ? parseInt(groupId) : null,
          validation: 'accepted',
          fileType: type,
          mimeType: '40',
        },
      });
      resources_id = resource.id;
    }

    const messageData: any = {
      content: content,
      senderId: parseInt(sender),
      receiverId: groupId ? null : parseInt(receiver),
      type: type as any,
      resourceId: resources_id,
      isRead: false,
    };

    if (groupId) {
      messageData.groupId = parseInt(groupId);
    }

    const message = await prisma.message.create({
      data: messageData,
      include: {
        sender: {
          select: { Mat: true, name: true, profile: true },
        },
        receiver: {
          select: { Mat: true, name: true },
        },
      },
    });

    // Emit the message via Socket.io
    if (global.io) {
      if (groupId) {
        global.io.to(`group_${groupId}`).emit('newMessage', message);
      } else {
        global.io.to(`user_${receiver}`).emit('newMessage', message);
      }
      global.io.to(`user_${sender}`).emit('newMessage', message); // Also send to sender for consistency
    }

    return NextResponse.json(message);
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi' }, { status: 500 });
  }
}

// PUT - Marquer les messages comme lus
export async function PUT(req: Request) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  const { senderId } = await req.json();

  await prisma.message.updateMany({
    where: {
      senderId: senderId,
      receiverId: session.user.id,
      isRead: false,
    },
    data: {
      isRead: true,
    },
  });

  return NextResponse.json({ success: true });
}