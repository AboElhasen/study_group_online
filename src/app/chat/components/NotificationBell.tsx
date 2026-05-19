'use client';
import React, { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';
import { useSocket } from '@/app/components/providers';

interface Notification {
  id: number | null;
  titre: string;
  content: string;
  sentAt: string;
  isRead: boolean;
}

const NotificationBell = ({ currentUserId }: { currentUserId: number }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showList, setShowList] = useState(false);
  const socket = useSocket();

  // 1. جلب الإشعارات الأولية عند تحميل المكون لأول مرة
  useEffect(() => {
    if (!currentUserId) return;

    fetch(`/api/notification?studentId=${currentUserId}`)
      .then(res => res.json())
      .then(data => {
        // تأكد من مطابقة هيكل البيانات القادم من الـ API الخاص بك
        setNotifications(data.notifications || data || []);
      })
      .catch(err => console.error("Error fetching notifnew Date()ications:", err));
  }, [currentUserId]);

  // 2. الاستماع للإشعارات الحية عبر السوكيت الموحد
  useEffect(() => {
    if (!socket || !currentUserId) return;

    // دالة استقبال الإشعار الجديد فوراً من السيرفر
    const handleNewNotification = (data: any) => {
      console.log("🔔 إشعار جديد وصل للجرس:", data);
      
      // بناء كائن الإشعار الجديد وإدراجه في أعلى القائمة حياً
      const newNotif: Notification = {
        id: data.id || null, // استخدام معرف مؤقت إن لم يتوفر
        titre: data.title || data.titre || 'إشعار جديد',
        content: data.message || data.content || '',
        sentAt: data.sentAt || new Date().toISOString(),
        isRead: false
      };
      
      setNotifications(prev => [newNotif, ...prev]);
      notifications.sort((a,b)=> new Date(b.sentAt).getTime() - new Date(a.sentAt).getTime());
      // إظهار القائمة تلقائياً لمدة 3 ثوانٍ لتنبيه المستخدم ثم إخفاؤها
      setShowList(true);
      const timer = setTimeout(() => {
        setShowList(false);
      }, 3000);

      return () => clearTimeout(timer);
    };

    socket.on('new_notification', handleNewNotification);

    // التطهير الآمن: إلغاء المستمع فقط عند تفكيك المكون دون قطع الاتصال العام!
    return () => {
      socket.off('new_notification', handleNewNotification);
    };
  }, [socket, currentUserId]);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* أيقونة الجرس */}
      <Bell 
        size={22} 
        style={{ cursor: 'pointer', color: 'black' }} 
        onClick={() => setShowList(!showList)} 
      />
      
      {/* شارة العداد الأحمر للإشعارات غير المقروءة */}
      {notifications.some(n => !n.isRead) && (
        <span style={{ 
          position: 'absolute', 
          top: -2, 
          right: -2, 
          background: '#ef4444', 
          color: '#fff', 
          borderRadius: '50%', 
          width: 16, 
          height: 16, 
          fontSize: 10, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontWeight: 'bold'
        }}>
          {notifications.filter(n => !n.isRead).length}
        </span>
      )}
      
      {/* القائمة المنسدلة للإشعارات */}
      {showList && (
        <div style={{ 
          position: 'absolute', 
          right: 0, 
          top: 28, 
          background: '#fff', 
          color: '#222', 
          minWidth: 260, 
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)', 
          borderRadius: 8, 
          zIndex: 100, 
          padding: 12,
          maxHeight: 350,
          overflow: 'auto'
        }}>
          <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 8, borderBottom: '1px solid #f0f0f0', paddingBottom: 6 }}>
            Notifications
          </div>
          
          {notifications.length === 0 ? (
            <div style={{ fontSize: 12, color: '#888', textAlign: 'center', padding: '10px 0' }}>
              No notifications
</div>
          ) : (
            notifications.map(n => (
              <div 
                key={n.id} 
                style={{ 
                  fontSize: 13, 
                  padding: '8px 0', 
                  borderBottom: '1px solid #eee',
                  backgroundColor: n.isRead ? 'transparent' : '#f9fafb' // تمييز غير المقروء بخلفية خفيفة
                }}
              >
                <h1 style={{ fontWeight: n.isRead ? 500 : 700, margin: '0 0 2px 0', fontSize: 13 }}>
                  {n.titre}
                </h1>
                <div style={{ color: '#4b5563', fontSize: 12 }}>{n.content}</div>
                <div style={{ fontSize: 9, color: '#9ca3af', marginTop: 4 }}>
                  {new Date(n.sentAt).toLocaleString('ae-AR')}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;