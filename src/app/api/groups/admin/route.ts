import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import prisma from '../../../../../prisma/client';

export async  function GET(req:Request){
    const session=await getServerSession();
    const {searchParams}=new URL(req.url);
    const studentId=searchParams.get('studentId');
    if(!session){
        return NextResponse.json({error:'Unauthorized'}, {status:401});
    }
    if(!studentId){
        return NextResponse.json({error:'studentId is required'}, {status:400});
    }
    const members=prisma.groupMembers.findMany({
        where:{studentId:parseInt(studentId),role:'admin'},
        select:{groupId:true,},
    });

    return NextResponse.json(members);
}
