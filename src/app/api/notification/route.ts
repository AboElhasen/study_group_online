import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../prisma/client';

// In-memory store for demonstration (replace with DB in production)
// let notifications: any[] = [];

export async function POST(req: NextRequest) {
     const {message,studentId,groupId} = await req.json();
  try {
   
   /* const notification = {
      id: Date.now(),
      ...body,
      createdAt: new Date().toISOString(),
      read: false,
    };*/
    // 1. هنا تقوم بكتابة الكود الخاص بحفظ الإعجاب في قاعدة البيانات...

    // 2. إرسال الإشعار فوراً للمستخدم صاحب المنشور عبر Socket.io

  //  notifications.push(notification);
   const notification = await prisma.notification.create({
        data: { content:message,studentId:parseInt(studentId) },
    });
        if (global.io) {
    await  global.io.to(`user_${parseInt(studentId)}`).emit('new_notification', {
      id: notification.id,
        title: "Message",
        message:message,
        sentAt: notification.sentAt.toISOString(),
      });
    }

    return NextResponse.json({ success: true, notification });
  } catch (error) {
  console.error({message,studentId,groupId});
    return NextResponse.json({ success: false, error: error?.toString() }, { status: 500 });
  }
}

export async function GET(req:Request) {
    const studentId=new URL(req.url).searchParams.get('studentId');
    const notifications=await prisma.notification.findMany({
        where:{studentId:parseInt(studentId!)},
        select:{
          id:true,
          titre:true,
          content:true,
          sentAt:true,
          isRead:true,
        },
        orderBy:{sentAt:'desc'},
    })
  return NextResponse.json({ notifications });
}
