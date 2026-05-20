import { randomUUID } from "crypto";
import prisma from '../../../../prisma/client';
import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from 'path';
import { getServerSession } from "next-auth/next";

export async function POST(req: Request) {
  try {
    const profile = await req.formData();
    const session=getServerSession();
    const file = profile.get('image') as File;
    //----------handle-image--
    const extension = file.type.split('/')[1];
    const filename = `${randomUUID()}.${extension}`;
    const uploadDir = path.join(process.cwd(), 'public/uploades');
    const filePath = path.join(uploadDir, filename);

    await mkdir(uploadDir, { recursive: true });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);


    const image = `/uploades/${filename}`;

    const newProfile = await prisma.profile.upsert({
     where: { studentId: parseInt(profile.get('studentId') as string) },
      update: {
          bio: profile.get('bio') as string, image: image ,
      },
        create:{studentId: parseInt(profile.get('studentId') as string),
        bio: profile.get('bio') as string,
        image: image,},
      });
    return NextResponse.json({ image:newProfile.image }, { status: 201 });
  } catch (error) {
    console.log('error in create', error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
