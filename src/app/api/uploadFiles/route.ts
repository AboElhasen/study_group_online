import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import  prisma  from "../../../../prisma/client"; 

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const senderId = formData.get("senderId") as string;
    const receiverId = formData.get("receiverId") as string;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // تحويل الملف إلى Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // تحديد مسار الحفظ (داخل مجلد public ليتم الوصول إليه عبر الرابط)
    const uploadDir = path.join(process.cwd(), "public/uploades/resources");
    
    // إنشاء المجلد إذا لم يكن موجوداً
    await mkdir(uploadDir, { recursive: true });

    // إنشاء اسم فريد للملف لمنع التكرار
    const uniqueName = `${Date.now()}-${file.name.replaceAll(" ", "_")}`;
    const filePath = path.join(uploadDir, uniqueName);

    // كتابة الملف في القرص الصلب
    await writeFile(filePath, buffer);

    // حفظ البيانات في MySQL عبر Prisma
    const savedMessage = await prisma.message.create({
      data: {
        content: `/uploades/resources/${uniqueName}`,
         senderId: Number(senderId), // حسب أسماء الحقول لديك
         receiverId: Number(receiverId),
           type: file.type.startsWith("image/") ? "image" : "file",
      },
    });

    return NextResponse.json({ success: true, message: savedMessage });
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}