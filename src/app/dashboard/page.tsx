'use client';
import { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { Student3 } from "../type/Student";

interface Resource {
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
  student: { Mat: number; name: string; profile?: { image?: string } };
  group:{id:number; name:string; type:string};
}
interface GroupMember{
  id:number;
  role:'admin'|'member';
  status:'accept'|'waiting';
  date_adhesion?:Date;
  groupId:number;
  studentId:number;
}

export default function Dashboard() {
  const {data:session,status}=useSession();
  const [student,setStudent]=useState<Student3[]>([]);
  const router=useRouter();
  const [isAdmin,setIsAdmin]=useState<boolean>(false);
  const [resources, setResources]=useState<Resource[]>([]);
  const [groupsId, setGroupsId]=useState<number[]>([]);
  //**************************
  
  // تأكد من استخدام useEffect للتحكم في وقت التنفيذ
  useEffect(() => {
    if (session?.user?.id) {
      loadGroupsMembers();
    }
  }, [session?.user?.id]); // سيعمل فقط عندما يتوفر الـ ID أو يتغير
 useEffect(() => {
  console.log(student);
}, [student]);
  const loadGroupsMembers = async () => {
    try {
      const res = await fetch(`/api/groups/members?studentId=${session?.user.id}`);
      if (!res.ok) throw new Error('Failed to fetch members');
      
      const data = await res.json();
      //setGroupMember(data);
      const groupsIds =await data.map((d: any) => d.groupId);
     setGroupsId(groupsIds);
     if (groupsIds.length > 0) {
        loadGroupResources(groupsIds);
        loadStudents(groupsIds);
        setIsAdmin(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

 const loadGroupResources = async (groupsIds: number[]) => {
    try {
      // استخدم التنسيق الصحيح للـ Template Literals باستخدام  وليس '
     
        
      const res = await fetch(`/api/resources?groupsIds=${groupsIds.join(',')}`);
      const data = await res.json();
      
      // تحديث الستيت هنا
      setResources(data || []);
    } catch (error) {
      console.error("Error loading group resources:", error);
    }
  };
 const loadStudents=async (groupsIds:number[])=>{
  try {
    //if(!groupsId) await loadGroupsMembers();
    const res = await fetch(`/api/student?type=1&groupsIds=${groupsIds.join(',')}`);
    const data = await res.json();
    setStudent(data);
    console.log(data); // log the new data, not the old state
    //  const acceptedMembers = data
  } catch (err) {
    console.error(err);
    toast.error("Failed to load students");
  }
}
  //***************************** 
  useEffect(() => {
     if (status === "unauthenticated") {
       router.push("/login");
     }
   }, [session, status, router]);
 
  const handleAccept = async (id: number) => {
   const res=await fetch('/api/resources',{
      method:'PUT',
     body:JSON.stringify({id,validation:'accepted'})
   });
   if(res.ok){
    toast.success('Ressource accepted');
    loadGroupsMembers();
   }
    }
    const handleReject = async (id: number) => {
   const res=await fetch('/api/resources', {
      method:'DELETE',
     body:JSON.stringify({id}),
   });
   if(res.ok){
    toast.success('Ressource rejected');
    loadGroupsMembers();
   }
    }
    const  handleNewMember=async (studentId:number,type:'accept'|'reject',groupId:number)=>{
      if(type==='accept'){
      const res=await fetch('/api/groups/members',{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({studentId,groupId}),
      });
    }else{
      const res=await fetch(`/api/groups/members?studentId=${studentId}&groupId=${groupId}`,{
        method:'DELETE'
      });
    }
    loadStudents(groupsId);
    }
  return (
  <>
  <Toaster position="top-right" />
    <div className={styles.container}>
      {/* Sidebar */}

      {/* Main */}
      <main className={styles.main}>
        <h1>Hello, Abdalkader</h1>
        <p className={styles.subtitle}>
          Here's an overview of your activity
        </p>

        {/* Cards */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <p>Unread messages</p>
            <h2>7</h2>
          </div>

          <div className={styles.card}>
            <p>Active groups</p>
            <h2>2</h2>
          </div>
        </div>
         {isAdmin &&<div className={styles.cards}>
        {/* Requests */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3>Membership requests</h3>
            <span>View all</span>
          </div>

         {student.filter(item => item.status === 'waiting' && item.Mat !== session?.user?.id).map((item, i) => (

            <div key={i} className={styles.request}>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'10px'}}>
               <div>
                <img style={{borderRadius: "100%",width:'100px',height:'100px'}} src={item.profile?.image || '/imageSystem/noPhoto.jfif'} alt={item.name} />
                </div>
              <div>
                <p className={styles.name}>{item.name}</p>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'5px'}}>
                 <p  style={{color:'red',fontSize:'small'}}>En attente</p>
               </div>
               </div>
            </div>
              <div>
                <button className={styles.accept}onClick={() => handleNewMember(item.Mat,'accept',item.groupId)}>accept</button>
                <button className={styles.reject} onClick={() => handleNewMember(item.Mat,'reject',item.groupId)}>reject</button>
              </div>
            </div>
          ))}
          </div>
           <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3>Resourcer non valide</h3>
            <span>View all</span>
          </div>
          {resources.map((item, i) => (
            <div key={i} className={styles.request}>
              <div>
                <img src="imageSystem/document.webp" alt="Document" />
                </div>
              <div>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.course}>{item.group.name || 'student'}</p>
              </div>

              <div>
                <button className={styles.accept} onClick={() => handleAccept(item.id)}>accept</button>
                <button className={styles.reject} onClick={() => handleReject(item.id)}>reject</button>
              </div>
        </div>
          ))}
          </div>
          </div>
}
        {/* Actions */}
        <div className={styles.section}>
          <h3>Quick actions</h3>

          <div className={styles.actions}>
            <button className={styles.primary} onClick={() => router.push('/groups/create')}>
              Créer un groupe
            </button>
            <button className={styles.secondary} onClick={() => router.push('/chat')}>
              Rejoindre un groupe
            </button>
            <button style={{position:'absolute', right:0}} className={styles.primary} onClick={() => router.push('/chat')}>
              Aller au chat
            </button>
        </div>
        </div>
      </main>
    </div>
    </>
  );
}
