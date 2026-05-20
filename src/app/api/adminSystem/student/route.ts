import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import  prisma  from  "../../../../../prisma/client";

export async function GET(req:Request) {
  const session = await getServerSession();
  const {searchParams} = new URL(req.url);
  const groupsIds=searchParams.get("groupsIds") || null;
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }
      const currentStudent = await prisma.student.findUnique({
    where: { email: session.user.email! },
  });
 if(!currentStudent){
   return NextResponse.json({ error: 'No Found' }, { status: 404 });
 }

const students = await prisma.student.findMany({
 // where: { groupMembers: { some: { groupId: { in: [parseInt(groupsIds!)] } } } },
  select: {
    Mat: true,
    name: true,
    email: true,
    role: true,
    createdAt: true,
    profile: {
      select: { image: true },
    },
   
}
});

return NextResponse.json(students);
}

export async function DELETE(req:Request){

   const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "غير مصرح" }, { status: 401 });
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
