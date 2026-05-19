'use client';
import React, { useState,useEffect} from 'react';
import AdminLayout from '../components/AdminLayout';
import { Student2 } from '@/app/type/Student';
import { useSession } from 'next-auth/react';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation";
import styles from '../admin.module.css';
import ToggleSwitch from '../components/ToggleSwitch';


interface Group {
  id: number;
  name: string;
  description: string;
  type: 'module' | 'projet' | 'revision';
  validation?:'waiting' | 'valide';
  groupMembers?: {
    role:string;
  student:{
    name:string;
  }
}[];
  createdAt: string;
  system_group_permission:system_group_permissions;
}
interface system_group_permissions{
  maxMember:number;
  allowFileSharing:boolean;
  allowPublicVisibility:boolean;
  maxFileSizeMB:number;
  allowMessages:boolean;
}
export default function RolesPage() {
    const {data:session,status}= useSession();
    const [maxFileSizeMB,setMaxFileSizeMB]=useState('');
    const [maxMember,setMaxMember]=useState('');
    const [groups,setGroups]=useState<Group[]>([]);
    const [toggleBool,setToggleBool]=useState(false);
   var toggle=0;

    useEffect(()=>{

      if(session)loadGroups();
    },[session,status]);

    

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

  const handlePermission=(permission:string,groupId:number,value?:string)=>{
    toggle+=1;
     if(toggle%2===0){
    try{
      if(permission!=='maxFileSizeMB' && permission!=='maxMember'){
      fetch(`/api/adminSystem/groups/permission`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({permission,groupId}),
      });
    }else{
      fetch(`/api/adminSystem/groups/permission`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({permission,groupId,value}),
    });
  }
  toast.success(`Permission ${permission} toggled!`);
  loadGroups();
    }catch(error){
      console.log(error);
      toast.error(`Permission ${permission} not toggled!`);
    }
  }
  }

  return (
    <AdminLayout>
      <Toaster position="top-right"/>
      {/*<div style={{display:'flex',gap:'2rem',flexDirection:'colu',justifyContent:'space-between',alignItems:'center'}}>*/}
      <h2 style={{ marginBottom: 24, fontWeight: 700, color: '#0ea5e9', fontSize: 24 }}>Roles Management</h2> 
      <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontSize: 16 }}>
             <thead>
               <tr style={{ background: '#f1f5f9' }}>
                 <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>Name</th>
                 <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>Description</th>
                 <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>Admins</th>
                 <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>Type</th>
                 <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>maxMember</th>
                 <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>allowFileSharing</th>
                 <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>allowPublicVisibility</th>
                 <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>maxFileSizeMB</th>
                 <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>allowMessages</th>
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
                  <td style={{ padding: '12px 10px', borderBottom: '1px solid #e5e7eb' }}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center' }} onClick={()=>handlePermission('maxMember',group.id,maxMember)}><input className={styles.permissionInput} type="number" value={group.system_group_permission?.maxMember.toString()} onChange={(e) => setMaxMember(e.target.value)}/></div>
                </td>
                   <td style={{ padding: '12px 10px', borderBottom: '1px solid #e5e7eb' }}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center' }} onClick={()=>handlePermission('allowFileSharing',group.id)}><ToggleSwitch isCheck={group.system_group_permission?.allowFileSharing!}/></div>
                </td>
                <td style={{ padding: '12px 10px', borderBottom: '1px solid #e5e7eb'}}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center' }} onClick={()=>handlePermission('allowPublicVisibility',group.id)}><ToggleSwitch isCheck={group.system_group_permission?.allowPublicVisibility!}/></div>
                </td>
                <td style={{ padding: '12px 10px', borderBottom: '1px solid #e5e7eb'}}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center' }} onClick={()=>handlePermission('maxFileSizeMB',group.id,maxFileSizeMB)}><input type="number" className={styles.permissionInput} value={group.system_group_permission?.maxFileSizeMB} onChange={(e) => setMaxFileSizeMB(e.target.value)}/></div>
                </td>
                <td style={{ padding: '12px 10px', borderBottom: '1px solid #e5e7eb'}}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center' }} onClick={()=>handlePermission('allowMessages',group.id)}><ToggleSwitch isCheck={group.system_group_permission?.allowMessages!}/></div>
                </td>
                     </tr>
                ))}
                     </tbody>
                      </table>
    {/*</di>*/}
    </AdminLayout>
  );
}
