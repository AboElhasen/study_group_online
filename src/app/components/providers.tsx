'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { SessionProvider, useSession } from "next-auth/react";

const SOCKET_URL = 'https://swampland-scouts-area.ngrok-free.dev/';

interface IsMobileContextType {
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  receiver: number;
  setReceiver: React.Dispatch<React.SetStateAction<number>>;
}

interface SocketContextProps {
  socket: Socket | null;
}

const IsMobileContext = createContext<IsMobileContextType | undefined>(undefined);
const SocketContext = createContext<SocketContextProps>({ socket: null });

export const useSocket = () => useContext(SocketContext).socket;
export function useApp() {
  const context = useContext(IsMobileContext);
  if (!context) throw new Error('useApp must be used within Providers');
  return context;
}

// 🟢 مكون داخلي لإدارة السوكيت لكي نتمكن من استخدام useSession بأمان
function SocketInternalProvider({ children }: { children: React.ReactNode }) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const { data: session } = useSession(); // جلب الجلسة مباشرة داخل المتصفح (مضمونة 100%)
  const userId = session?.user?.id;

  // 1. إنشاء اتصال السوكيت مرة واحدة للموقع بالكامل
  useEffect(() => {
    const newSocket = io(SOCKET_URL, { 
      transports: ['websocket'],
      autoConnect: true 
    });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  // 2. مراقبة الـ userId وإرسال حدث الـ 'join' (تماماً مثل فكرة الاتصال المنفرد الناجحة)
  useEffect(() => {
    if (!socket) return;

    const handleJoin = () => {
      if (userId) {
        console.log(`📡 [سوكيت الموحد] تم رصد المستخدم مسجل دخول، إرسال join للمعرف: ${userId}`);
        socket.emit('join', String(userId));
      }
    };

    if (socket.connected) {
      handleJoin();
    }
    socket.on('connect', handleJoin);

    return () => {
      socket.off('connect', handleJoin);
    };
  }, [socket, userId]); // سيعيد التفعيل فوراً بمجرد أن يتعرف useSession على المستخدم

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}

// المكون الرئيسي الشامل
export function Providers({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [receiver, setReceiver] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <SessionProvider>
      <IsMobileContext.Provider value={{ isMobile, setIsMobile, receiver, setReceiver }}>
        <SocketInternalProvider>
          {children}
        </SocketInternalProvider>
      </IsMobileContext.Provider>
    </SessionProvider>
  );
}