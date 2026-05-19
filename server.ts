import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import next from 'next';
import { Server as SocketIOServer, Socket } from 'socket.io';

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// خريطة تتبع المتصلين (userId -> socketId)
const onlineUsers = new Map<string, string>();

declare global {
  var io: any;
}

app.prepare().then(() => {
  const httpServer = createServer((req: IncomingMessage, res: ServerResponse) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  });

  const io = new SocketIOServer(httpServer, {
    cors: { origin: "*", methods: ["GET", "POST"] },
    transports: ['websocket']
  });

  global.io = io;

  io.on('connection', (socket: Socket) => {
    console.log('User connected:', socket.id);

    // عند دخول المستخدم للموقع
    socket.on('join', (userId: string) => {
      if (userId) {
        const stringId = String(userId);
        onlineUsers.set(stringId, socket.id); // حفظه كـ Online
        socket.join(`user_${stringId}`);
        console.log(`📡 User ${stringId} is now ONLINE with socket: ${socket.id}`);
      }
    });

    // دخول غرف المجموعات في الشات
    socket.on('joinGroup', (groupId: string) => {
      socket.join(`group_${groupId}`);
      console.log(`Socket ${socket.id} joined group_${groupId}`);
    });

    // معالجة الإشعارات والتحقق من حالة الـ Online
    socket.on('send_notification', (data: { targetUserId: string; title: string; message: string }) => {
      const targetId = String(data.targetUserId);
      const userSocketId = onlineUsers.get(targetId);
      const userIsOnline = !!userSocketId; // تحويلها لقيمة منطقية

      if (userIsOnline) {
        // إذا كان أونلاين أرسل عبر السوكيت فوراً
        io.to(`user_${targetId}`).emit('new_notification', {
          title: data.title,
          message: data.message,
          createdAt: new Date()
        });
        console.log(`Notification sent via Socket to online user: ${targetId}`);
      } else {
        // إذا كان أوفلاين يمكنك التحويل لـ Firebase هنا
        console.log(`User ${targetId} is OFFLINE. Push notification triggered.`);
      }
    });

    socket.on('disconnect', () => {
      for (const [userId, sId] of onlineUsers.entries()) {
        if (sId === socket.id) {
          onlineUsers.delete(userId);
          console.log(`❌ User ${userId} went OFFLINE (Disconnected)`);
          break;
        }
      }
    });
  });

  httpServer.listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});