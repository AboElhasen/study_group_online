import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import  prisma  from  "../../../../prisma/client";
import { Student3 } from "@/app/type/Student";

export async function GET(req:Request) {
  const session = await getServerSession();
  const {searchParams} = new URL(req.url);
  const type=searchParams.get("type") || null;
  const groupsIds=searchParams.get("groupsIds") || null;
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }
      const currentStudent = await prisma.student.findUnique({
    where: { email: session.user.email! },
  });
 if(!currentStudent){
   return NextResponse.json({ error: 'Not found' }, { status: 404 });
 }
  if(type==='1'){

// 2. الكود البرمجي مع التصحيح

const studentWithGroups = await prisma.student.findMany({
  where: { groupMembers: { some: { groupId: { in: [parseInt(groupsIds!)] } } } },
  select: {
    Mat: true,
    name: true,
    email: true,
    role: true,
    createdAt: true,
    profile: {
      select: { image: true },
    },
    groupMembers: {
      select: {
        groupId: true,
      status: true,
        groups: { select: { name: true ,} }
              },
    },
  }
});

const studentGroups: Student3[] = studentWithGroups.flatMap((student) => {
  // نقوم بتفكيك الحقول التي لا نريدها أن تنتقل للنتيجة النهائية
  const { groupMembers, ...studentData } = student;
 /*if(groupMembers.length==0){
  return[{
    ...studentData,
    groupId: 0,
    groupName: 'aucune...',
    status: 'aucune...'
  }]
 }*/
  return groupMembers.map((g) => ({
    ...studentData, // ننسخ بيانات الطالب فقط بدون مصفوفة المجموعات
    groupId: g.groupId ?? 0 ,
    groupName: g.groups?.name ?? 'aucune',
    status: g.status ,
  }));
});

return NextResponse.json(studentGroups);
  }else{
     const studentsAndProfiles = await prisma.student.findMany({
    
            select:{
        Mat:true,
        name:true,
        profile:{
          select:{
            image:true,
          },
        },
        _count:{
          select:{
            receivedMessages:{
              where:{isRead:false,senderId:session.user?.id},
            }
          }
        },} 
        });

     
  
       return NextResponse.json(studentsAndProfiles);
      }

}

export async function DELETE(req:Request){

   const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }
  const searshParams=new URL(req.url).searchParams;
  const Mat=searshParams.get("Mat");
  try{
    await prisma.student.delete({
      where:{Mat:parseInt(Mat!)},
      });
      return NextResponse.json({message:"تم حذف الطالب بنجاح"});
  }catch(err){
    console.error(err);
    return NextResponse.json({error:"خطأ في حذف الطالب"}, {status:500});
  }
}
