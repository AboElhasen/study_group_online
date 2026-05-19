'use client';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Student1 } from "../../type/Student";
import '../pages.css';
import { useApp } from "../../components/providers";

export  default  function Chats(){
    const {data:session,status}= useSession();
    const [students , setStudents]=useState<Student1[]>([]);
    const {setReceiver,receiver,isMobile}=useApp();
    const router =useRouter();
    function handlerConversationClick(e:number){
       setReceiver(e);
      router.push('/chat');
    }
      useEffect(()=>{
        if(status==="unauthenticated"){
          router.push("/login");
        }
        if(session){
          fetch("api/student")
          .then((res)=>res.json())
        .then(setStudents)
        }

      },[session,status,router]);
  return (
    <div className={`conversations-panel ${isMobile ? 'mobile':''}`}>  
        <div className={`conversations-header ${isMobile ? 'mobile':''}`}>
          <h3>المحادثات</h3>
        </div>
        <div className="conversations-list">
            {students && students.map((s) => (
              <div onClick={()=>handlerConversationClick(s.Mat)} className="conversation-item"  key={s.Mat}>
                 <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}} >
     <img className="avatar" src={s.profile?.image || "/imageSystem/noPhoto.jfif"} alt={s.name}/>
                 <div className="conv-info">
                <span className="conv-name">{s.name}</span>
                 <span className="last-msg">آخر رسالة...</span>
                </div>
                </div>
                <small style={{color:'white',backgroundColor:'#999',alignItems:'center',height:'fit-content'}}>{s._count.sentMessage}</small>
              </div>
            ))}
        </div>
        </div>
  );
}