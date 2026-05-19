// app/admin/dashboard/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import { db } from '@/lib/db'; // تأكد من إعداد Prisma Client
import { Users, BookOpen, Clock, Settings, LogOut, Search, PlusCircle, Pencil, Trash2, Eye, ChevronLast, ChevronRight } from 'lucide-react';
import styles from './admin.module.css';
import AdminLayout from './components/AdminLayout';
import { useSession } from 'next-auth/react';
import { Student2} from '../type/Student';
import toast, { Toaster } from 'react-hot-toast';

 
const AdminPage =  () => {
  const { data: session,status } = useSession(); 
  const[students,setStudents]=useState<Student2[]>([]);

 const handleDeleteStudent=async (Mat:number)=>{
  const res= await fetch(`/api/adminSystem/student?Mat=${Mat}`,{
   method:'DELETE',} );
  if(res.ok){
  const data=await res.json();
  toast.success(data.message);
  loadStudent();
}   }

const loadStudent=async ()=>{
  try {
    const res =await fetch('/api/adminSystem/student');
    const data=await res.json();
    setStudents(data || []);
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    //return { stats: { totalStudents: 0, totalGroups: 0, activityRate: 0 }, students: [] };
  }
}
  useEffect(() => {  
loadStudent();
},[session,status]);


  return (
    <AdminLayout>
      <div style={{
        display: 'flex',
        gap: '2rem',
        marginBottom: '2rem',
        flexWrap: 'wrap',
      }}>
        <div style={{
          flex: '1 1 220px',
          background: 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)',
          borderRadius: 16,
          padding: 28,
          boxShadow: '0 4px 24px #bae6fd55',
          minWidth: 220,
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          transition: 'transform 0.2s',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Users size={28} />
            <h3 style={{ margin: 0, fontWeight: 600, fontSize: 18 }}>Total Students</h3>
          </div>
          <div style={{ fontSize: 38, fontWeight: 800, marginTop: 10 }}>{students.length}</div>
        </div>
        <div style={{
          flex: '1 1 220px',
          background: 'linear-gradient(135deg, #a7f3d0 0%, #38bdf8 100%)',
          borderRadius: 16,
          padding: 28,
          boxShadow: '0 4px 24px #bae6fd55',
          minWidth: 220,
          color: '#0f172a',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          transition: 'transform 0.2s',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <BookOpen size={28} />
            <h3 style={{ margin: 0, fontWeight: 600, fontSize: 18 }}>Active Groups</h3>
          </div>
          <div style={{ fontSize: 38, fontWeight: 800, marginTop: 10 }}>--</div>
        </div>
        <div style={{
          flex: '1 1 220px',
          background: 'linear-gradient(135deg, #fef08a 0%, #facc15 100%)',
          borderRadius: 16,
          padding: 28,
          boxShadow: '0 4px 24px #fde68a55',
          minWidth: 220,
          color: '#78350f',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          transition: 'transform 0.2s',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Clock size={28} />
            <h3 style={{ margin: 0, fontWeight: 600, fontSize: 18 }}>Pending Validations</h3>
          </div>
          <div style={{ fontSize: 38, fontWeight: 800, marginTop: 10 }}>--</div>
        </div>
        <div style={{
          flex: '1 1 220px',
          background: 'linear-gradient(135deg, #fca5a5 0%, #f87171 100%)',
          borderRadius: 16,
          padding: 28,
          boxShadow: '0 4px 24px #fca5a555',
          minWidth: 220,
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          transition: 'transform 0.2s',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Settings size={28} />
            <h3 style={{ margin: 0, fontWeight: 600, fontSize: 18 }}>Total Resources</h3>
          </div>
          <div style={{ fontSize: 38, fontWeight: 800, marginTop: 10 }}>--</div>
        </div>
      </div>
      <div style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 2px 12px #e0e7ef55',
        padding: 32,
        marginBottom: 32,
        overflowX: 'auto',
      }}>
       
      </div>
      <Toaster />
    </AdminLayout>
  );
};

export default AdminPage;