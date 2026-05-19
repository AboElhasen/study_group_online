import { getServerSession } from 'next-auth';
import  prisma  from '../../../../prisma/client';
import { NextResponse } from "next/server";

export async function GET(req: Request){
    const session= await getServerSession();
    const {searchParams}= new URL(req.url);
    const Mat=searchParams.get('Mat')
   if(!session){
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
   }
  const profile = await prisma.profile.findUnique({
    where:{studentId: parseInt(Mat!)},
    include: {
      student: true
    }
  });

    if (!profile) {
      return NextResponse.json({message: "Profile not found"}, {status: 404});
    }

    return NextResponse.json(profile);
}
