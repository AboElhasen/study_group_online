'use client';
import { sendNotification } from './utils/notify';
import { useSession } from 'next-auth/react';
import { useEffect, useState, useRef, type KeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Paperclip, Image as ImageIcon, File as FileIcon, Send, Download, Plus } from 'lucide-react';
import { CloudinaryUpload } from '../components/CloudinaryUpload';
import toast, { Toaster } from 'react-hot-toast';
import { io, Socket } from 'socket.io-client';
import { useApp, useSocket } from '@/app/components/providers';
import styles from './chatStyles';
import Sidebar from './components/Sidebar';
import ChatPanel from './components/ChatPanel';
import RightPanel from './components/RightPanel';
import NotificationBell from './components/NotificationBell';

// --- Interfaces الأصلية بدون تغيير ---
interface Message {
  id: number;
  content: string;
  senderId: number;
  receiverId?: number;
  groupId?: number;
  type: 'text' | 'image' | 'video' |'file';
  isRead: boolean;
  createdAt: string;
  resource?:{
     id: number;
  name: string;
  filepath: string;
  size: number;
  studentId: number;
  groupId?: number;
  validation: 'accepted' | 'rejected' | 'waiting';
  uploadedAt: string;
  fileType: string;
  mimeType: string;
  }| null;
  resourceId?: number;
  sender: { Mat: number; name: string; profile?: { image?: string } };
  receiver: { Mat: number; name: string };
}

interface Student {
  Mat: number;
  name: string;
  profile?: { image?: string };
  _count?: { sentMessage: number };
}

interface Group {
  id: number;
  name: string;
  description: string;
  type: 'module' | 'projet' | 'revision';
  validation:'waiting' | 'valide';
  createdAt: string;
}
  
interface groupMember{
  id:number;
  role:'admin'|'member';
  status:'accept'|'waiting';
  date_adhesion?:Date;
  groupId:number;
  studentId:number;
}
interface Resource {
  id: number;
  name: string;
  filepath: string;
  size: number;
  studentId: number;
  groupId: number;
  validation: 'accepted' | 'rejected' | 'waiting';
  uploadedAt: string;
  fileType: string;
  mimeType: string;
  student: { Mat: number; name: string; profile?: { image?: string } };
}





function ChatContent() {
  const { data: session, status } = useSession();
  const router = useRouter();
 
  // const newSocket =useSocket();
  // --- States ---
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [students, setStudents] = useState<Student[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [groupMembers, setGroupMembers] = useState<groupMember[]>([]);
  const [studentMembers, setStudentMembers] = useState<Student[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);
  const [showResources, setShowResources] = useState(false);
  const [activeTab, setActiveTab] = useState<'individuals' | 'groups' | null>(null);
  const [selectedGroupId, setSelectedGroupId] = useState(0);
   const [receiver, setReceiver ]=useState(0);
  const [isSending, setIsSending] = useState(false);
  const [loading, setLoading] = useState(true);
  //const [socket, setSocket] = useState<Socket | null>(null);
  const [showAttachmentMenu, setShowAttachmentMenu] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null) as React.RefObject<HTMLTextAreaElement>;
  const currentUserId = Number(session?.user?.id) || 0;
  const selectedGroup = groups.find((g) => g.id === selectedGroupId) || null;
  const selectedChatActive = activeTab === 'groups' ? selectedGroupId !== 0 : receiver !== 0;

  // ----------- Functions ------------
  const loadStudents = async () => {
    try {
      const res = await fetch('/api/student');
      const data = await res.json();
      setStudents(data || []);
    } catch (error) { console.error(error); }
  };

  const loadGroups = async () => {
    try {
      const res = await fetch('/api/groups');
      const data = await res.json();
      setGroups(data || []);
    } catch (error) { console.error(error); }
  };

  const loadGroupMembers = async () => {
    try {
      const response = await fetch(`/api/groups/members?groupId=${selectedGroupId}`);
      const data = await response.json();
      const membersArray = Array.isArray(data) ? data : [];
      setGroupMembers(membersArray);
      // التحقق من عضوية المستخدم الحالي
      const isCurrentUserMember = membersArray.some(m => m.studentId === currentUserId && m.status == 'accept');
      setIsMember(isCurrentUserMember);
      // جلب بيانات الطلاب من الأعضاء المقبولين
      const acceptedMembers = membersArray.filter(m => m.studentId && m.status === 'accept').map(m => m.studentId);
      // تصفية الطلاب مرة واحدة فقط
      const matchedStudents = students.filter(s => acceptedMembers.includes(s.Mat));
      setStudentMembers(matchedStudents);
    } catch (error) {
      console.error(error);
      setGroupMembers([]);
      setIsMember(false);
      setStudentMembers([]);
    }
  };
  
  const loadGroupResources = async (groupId: number) => {
    try {
      const res = await fetch(`/api/resources?groupId=${groupId}`);
      const data = await res.json();
      const fetchedResources = data || [];
      setResources(fetchedResources);
    } catch (error) {
      console.error('Error loading group resources:', error);
    }
  };
  useEffect(() => {
    if (status === 'unauthenticated') router.push('/login');
    if (session) { loadStudents(); loadGroups(); }
  }, [session, status]);

//********** ********SocketService 
const socket = useSocket(); 

useEffect(() => {
  if (!session || !socket) return;
  loadGroupMembers();

  if (selectedGroupId && selectedGroupId !== 0) {
    socket.emit('joinGroup', selectedGroupId);
  }

  const handleNewMessage = (message: Message) => {
    setMessages((prev) => {
      if (prev.some((m) => m.id === message.id)) return prev;
      const isDirect = message.senderId === receiver || message.receiverId === receiver;
      const isGroup = selectedGroupId !== 0 && message.groupId === selectedGroupId;
      if (isDirect || isGroup) return [...prev, message];
      return prev;
    });
  };

  socket.on('newMessage', handleNewMessage);

  return () => {
    socket.off('newMessage', handleNewMessage); // إلغاء المستمع فقط
  };
}, [receiver, socket, selectedGroupId, session]);// سيعيد بناء المستمعين فقط عند تغير الغرفة أو الشخص المستلم
//*****************Fetch Messages 
 useEffect(() => {
    if (!session || !selectedChatActive) {
      setMessages([]); setResources([]); setLoading(false); return;
    }
    const fetchMessages = async () => {
      try {
        const query = activeTab === 'groups' ? `groupId=${selectedGroupId}` : `receiver=${receiver}`;
        const res = await fetch(`/api/message?${query}`);
        const data = await res.json();
        setMessages(data || []);
        if (activeTab === 'groups' && selectedGroupId !== 0) await loadGroupResources(selectedGroupId);
      } catch (error) { console.error(error); } finally { setLoading(false); }
    };
    fetchMessages();
  }, [receiver, selectedGroupId, activeTab, session]);
  //*****************Membership
  const handleRequestMemberShip = async (studentId: number, groupId: number,studentName:string) => {
    const res = await fetch(`api/groups/members`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ studentId, groupId }),
    });
    if (res.ok) {
      toast.success('Membership request sent');
      await sendNotification(`New membership request for group ${groupId} from student ${studentName}`, { groupId, studentId });
    }
  };
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);
  const sendTextMessage = async (text: string) => {
    if (!text.trim() || isSending || !session?.user?.id) return;
    setIsSending(true);
    try {
      const payload: any = { sender: currentUserId, content: text, type: 'text' };
      if (activeTab === 'groups') { payload.groupId = selectedGroupId; payload.receiver = currentUserId; }
      else { payload.receiver = receiver; }
      const res = await fetch('/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setNewMessage('');
        await sendNotification(text, { studentId: receiver, groupId: selectedGroupId || null });
      }
    } catch (error) { toast.error("Error sending message"); } finally { setIsSending(false); }
  };
  const handleUpload = async (result: any, uploadType: 'image' | 'file') => {
    setShowAttachmentMenu(false);
    const payload: any = {
      sender: currentUserId, content: result.url, fileUrl: result.url,
      fileName: result.name, fileSize: result.size, type: uploadType,
    };
    if (activeTab === 'groups') { payload.groupId = selectedGroupId; }
    else { payload.receiver = receiver; }
   const res= await fetch('/api/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if(res.ok) await sendNotification(`File :${result.name}`, {receiver,groupId:selectedGroupId || null });
  };
  const handleEnterKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendTextMessage(newMessage); }
  };
  return (
    <div style={styles.chatApp}>
      <Toaster position="top-right" />
      {/* Notification Bell at the top right */}
      <div style={{ position: 'absolute', top: 18, right: 30, zIndex: 200 }}>
        <NotificationBell currentUserId={currentUserId} />
      </div>
      <Sidebar
        groups={groups}
        students={students}
        currentUserId={currentUserId}
        selectedGroupId={selectedGroupId}
        setSelectedGroupId={setSelectedGroupId}
        receiver={receiver}
        setReceiver={setReceiver}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ChatPanel
        messages={messages}
        messagesEndRef={messagesEndRef}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        sendTextMessage={sendTextMessage}
        isSending={isSending}
        showAttachmentMenu={showAttachmentMenu}
        setShowAttachmentMenu={setShowAttachmentMenu}
        handleUpload={handleUpload}
        textAreaRef={textAreaRef}
        handleEnterKey={handleEnterKey}
        selectedChatActive={selectedChatActive}
        isMember={isMember}
        activeTab={activeTab}
        currentUserId={currentUserId}
        selectedGroup={selectedGroup}
        students={students}
        receiver={receiver}
        handleRequestMemberShip={handleRequestMemberShip}
      />
      {(activeTab && (resources || groupMembers ) )&& (
        <RightPanel
          activeTab={activeTab}
          studentMembers={studentMembers}
          resources={resources}
        />
      )}
    </div>
  );
}

export default ChatContent;