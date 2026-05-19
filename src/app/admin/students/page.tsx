'use client';
import React, { useState,useEffect} from 'react';
import AdminLayout from '../components/AdminLayout';
import { Student2 } from '@/app/type/Student';
import { useSession } from 'next-auth/react';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation";


export default function StudentsPage() {
    const {data:session,status}= useSession();
    const [editStudent, setEditStudent] =useState<Student2 | null>(null);
    const[students,setStudents]=useState<Student2[]>([]);
    const route= useRouter();

    const handleEditStudent = (Mat: number) => {
        const student:Student2 | undefined=students.find(s=>s.Mat===Mat);
        if(student)setEditStudent(student!);
         }
         
         const handleDeleteStudent=async (Mat:number)=>{
          const res= await fetch(`/api/adminSystem/student?Mat=${Mat}`,{
           method:'DELETE',} );
          if(res.ok){
          const data=await res.json();
          toast.success(data.message);
          loadStudent();
        }
       }

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
    <>
    <Toaster position="top-right" />
    <AdminLayout>
        <div style={{display:'flex',gap:'2rem',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <h2 style={{ marginBottom: 24, fontWeight: 700, color: '#0ea5e9', fontSize: 24 }}>Student Management</h2> 
      <button   onClick={() => route.push('/register')}
                    style={{
                      color: '#fff',
                      background: 'linear-gradient(90deg, #4472ef 0%, #71c7f8 100%)',
                        border: 'none',
                      borderRadius: 6,
                      padding: '6px 18px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      boxShadow: '0 1px 4px #fca5a555',
                      transition: 'background 0.2s',}}>Add Student</button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontSize: 16 }}>
          <thead>
            <tr style={{ background: '#f1f5f9' }}>
              <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>Mat</th>
              <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>Name</th>
              <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>Email</th>
              <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: 600, color: '#334155' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, idx) => (
              <tr key={student.Mat} style={{
                background: idx % 2 === 0 ? '#f9fafb' : '#fff',
                transition: 'background 0.2s',
                borderRadius: 8,
                boxShadow: '0 1px 2px #e5e7eb22',
              }}>
                <td style={{ padding: '12px 10px', borderBottom: '1px solid #e5e7eb' }}>{student.Mat}</td>
                <td style={{ padding: '12px 10px', borderBottom: '1px solid #e5e7eb' }}>{student.name}</td>
                <td style={{ padding: '12px 10px', borderBottom: '1px solid #e5e7eb' }}>{student.email}</td>
                <td style={{ padding: '12px 10px', borderBottom: '1px solid #e5e7eb',display:'flex',flexDirection:'row',gap:'10px' }}>
                  <button
                    onClick={() => handleDeleteStudent(student.Mat)}
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
                    onClick={() => handleEditStudent(student.Mat)}
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
