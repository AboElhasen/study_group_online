'use client';
import React, { useState,useEffect} from 'react';
import AdminLayout from '../components/AdminLayout';
import { Student2 } from '@/app/type/Student';
import { useSession } from 'next-auth/react';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation";

interface Group {
  id: number;
  name: string;
  description: string;
  type: 'module' | 'projet' | 'revision';
  validation?:'waiting' | 'valide';
  groupMembers: {
    role:string;
  student:{
    name:string;
  }
}[];
  createdAt: string;
}
  
export default function GroupsPage() {
   const {data:session,status}= useSession();
      const [editGroup, setEditGroup] =useState<Group | null>(null);
      const[groups,setGroups]=useState<Group[]>([]);
      const route= useRouter();
  
      const handleEditGroup = (id: number) => {
          const group:Group | undefined=groups.find(s=>s.id===id);
          if(group)setEditGroup(group!);
           }
           
           const handleDeleteGroup:any=async (id:number)=>{
            const res= await fetch(`/api/adminSystem/groups?groupId=${id}`,{
             method:'DELETE',} );
            if(res.ok){
            const data=await res.json();
            toast.success(data.message);
            loadGroups();
          }
         }
  
          const loadGroups=async ()=>{
            try {
              const res =await fetch('/api/adminSystem/groups');
              const data=await res.json();
              setGroups(data || []);
            } catch (error) {
              console.error("Error fetching dashboard data:", error);
              //return { stats: { totalStudents: 0, totalGroups: 0, activityRate: 0 }, students: [] };
            }
          }
            useEffect(() => {  
          loadGroups();
          },[session,status]);
  return (
     <>
       <Toaster position="top-right" />
       <AdminLayout>
           <div style={{display:'flex',gap:'2rem',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
         <h2 style={{ marginBottom: 24, fontWeight: 700, color: '#0ea5e9', fontSize: 24 }}>Group Management</h2> 
         <button   onClick={() => route.push('/groups/create')}
                       style={{
                         color: '#fff',
                         background: 'linear-gradient(90deg, #4472ef 0%, #71c7f8 100%)',
                           border: 'none',
                         borderRadius: 6,
                         padding: '6px 18px',
                         fontWeight: 600,
                         cursor: 'pointer',
                         boxShadow: '0 1px 4px #fca5a555',
                         transition: 'background 0.2s',}}>Add Group</button>
           </div>
           <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontSize: 16 }}>
             <thead>
               <tr style={{ background: '#f1f5f9' }}>
                 <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>Name</th>
                 <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>Description</th>
                 <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>Admins</th>
                 <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>Type</th>
                 <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>Actions</th>
               </tr>
             </thead>
             <tbody>
               {groups.map((group, idx) => (
                 <tr key={group.id} style={{
                   background: idx % 2 === 0 ? '#f9fafb' : '#fff',
                   transition: 'background 0.2s',
                   borderRadius: 8,
                   boxShadow: '0 1px 2px #e5e7eb22',
                 }}>
                   <td style={{ padding: '12px 10px', borderBottom: '1px solid #e5e7eb' }}>{group.name}</td>
                   <td style={{ padding: '12px 10px', borderBottom: '1px solid #e5e7eb' }}>{group.description}</td>
                   <td style={{ padding: '12px 10px', borderBottom: '1px solid #e5e7eb' }}>{group.groupMembers?.filter((member: any) => member.role==='admin').map((member: any) => member.student.name).join(', ') || 'aucune'}</td>
                   <td style={{ padding: '12px 10px', borderBottom: '1px solid #e5e7eb' }}>{group.type}</td>
                   <td style={{ padding: '12px 10px', borderBottom: '1px solid #e5e7eb',display:'flex',flexDirection:'row',gap:'10px' }}>
                     <button
                       onClick={() => handleDeleteGroup(group.id)}
                       style={{
                         color: '#fff',
                         background: 'linear-gradient(90deg, #ef4444 0%, #f87171 100%)',
                         border: 'none',
                         borderRadius: 6,
                         padding: '6px 18px',
                         fontWeight: 600,
                         cursor: 'pointer',
                         boxShadow: '0 1px 4px #fca5a555',
                         transition: 'background 0.2s',
                       }}
                     >Delete</button>
                     <button
                       onClick={() => handleEditGroup(group.id)}
                       style={{
                         color: '#fff',
                         background: 'linear-gradient(90deg, #4472ef 0%, #71c7f8 100%)',
                         border: 'none',
                         borderRadius: 6,
                         padding: '6px 18px',
                         fontWeight: 600,
                         cursor: 'pointer',
                         boxShadow: '0 1px 4px #fca5a555',
                         transition: 'background 0.2s',
                       }}
                     >Edit</button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
       </AdminLayout>
       </>
  );
}
