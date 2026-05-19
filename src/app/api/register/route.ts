import { NextResponse } from "next/server";
import  prisma  from '../../../../prisma/client';
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        const body = await req.json(); // قراءة البيانات من Body الطلب
        const { Mat, fullname, email, password } = body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const student = await prisma.student.create({
            data: {
                Mat:parseInt(Mat),
                name:`${fullname}`,
                email,
                role:'student',
                password: hashedPassword,
            },
        });

        return NextResponse.json({ message: "Success" }, { status: 201 });
    } catch (error: any) {
        console.error("Server Error:", error.message);
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}
