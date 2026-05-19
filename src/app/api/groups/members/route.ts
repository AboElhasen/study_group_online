import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '../../../../../prisma/client';

export async function GET(req: Request) {
    try{
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const groupId = searchParams.get('groupId');
  const studentId=searchParams.get('studentId');
   const where: any = {};
  if (groupId) {
    where.groupId=parseInt(groupId);
    const group = await prisma.groups.findUnique({
      where: { id: parseInt(groupId) },
    });

    if (!group) {
      return NextResponse.json({ error: 'Groupe introuvable' }, { status: 404 });
    }
  }
  if(studentId){
    where.studentId=parseInt(studentId);
  }

  const groupMembers = await prisma.groupMembers.findMany({
    where,
    select:{
        id:true,
  role:true,
  status:true,
  date_adhesion:true,
  groupId:true,
  studentId:true,
    }
  });

  return NextResponse.json(groupMembers);
}catch(error){
    return NextResponse.json({error:error},{status:500});
}
}
export async function POST(req:Request){
  const session=await getServerSession();
  if(!session){
    return NextResponse.json({error:'Unauthorized'},{status:401});
  }
  try{
  const {studentId,groupId}=await req.json();
  const countMembers=await prisma.groupMembers.count({
    where:{groupId:parseInt(groupId)}
  })
  const permission=await prisma.system_group_permission.findUnique({
    where:{groupId:parseInt(groupId)},
  });
  if(permission!.autoAccept){
      await prisma.groupMembers.create({
   data:{
    studentId:parseInt(studentId),
    groupId:parseInt(groupId),
    status:'accept',
   }
   });
   return NextResponse.json({message:'you are a member now'});
  }
  if(permission!.maxMember>countMembers){
    return NextResponse.json({message:'Group is full'});
  }
   await prisma.groupMembers.create({
   data:{
    studentId:parseInt(studentId),
    groupId:parseInt(groupId),
   }
   });
  
  return NextResponse.json({message:'Membership request sent'})
}catch(err){
  console.log(err);
  return NextResponse.json({error:err},{status:500});
}

}

export async function PUT(req:Request){
 const session=await getServerSession();
 if(!session){
  return NextResponse.json({error:'Unauthorized'},{status:401});
 }
 try{
const {studentId,groupId}=await req.json();
 await prisma.groupMembers.updateMany({
  where:{studentId,groupId},
  data:{status:'accept',date_adhesion:new Date()},
 });
 }catch(err){
  console.log(err);
  return NextResponse.json({error:err},{status:500});
 }
  }

export async function DELETE(req:Request){
  const session=await getServerSession();
  const {searchParams}=new URL(req.url);
  const studentId=searchParams.get('studentId');
  const groupId=searchParams.get('groupId');
  if(!session){
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }
  if(!studentId || !groupId){
     return NextResponse.json({ error: 'Bad Request' }, { status: 400 });
  }
  //    OR: [ { receiverId: senderId, senderId: receiver },
  try{
   const memberDeleted= await prisma .groupMembers.deleteMany({
    where:{studentId:parseInt(studentId) , groupId:parseInt(groupId)},
   });
  }catch(err){
    return NextResponse.json({error:err},{status:500});
  }
}
