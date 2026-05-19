import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../../../prisma/client"; // تأكد من استيراد prisma المصلح الذي يحتوي على قوسين { prisma }
import bcrypt from "bcryptjs";
import { CredentialsSignin } from "next-auth"; // 👈 استورد هذا الكلاس في الأعلى
 

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
    throw new CredentialsSignin("الرجاء إدخال البريد الإلكتروني وكلمة المرور");
        }
    
        // البحث عن الطالب في قاعدة البيانات
        const student = await prisma.student.findUnique({
          where: { email: credentials.email as string },
          include: { profile: true }
        });

        if (!student) {
          throw new CredentialsSignin("البريد الإلكتروني أو كلمة المرور غير صحيحة");
        }

        // التحقق من كلمة المرور باستخدام bcryptjs المتوافق مع Netlify
        const isValid = await bcrypt.compare(credentials.password as string, student.password);
        if (!isValid) {
           throw new CredentialsSignin("البريد الإلكتروني أو كلمة المرور غير صحيحة");
        }

        // إرجاع بيانات الطالب
        return {
          id: String(student.Mat),
          name: student.name,
          email: student.email,
          image: student.profile?.image || null,
          role: student.role,
        };
      }
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = parseInt(user.id!);
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as number;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.image = token.image as string | null;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
});

// --- تعديل أنواع الـ TypeScript لتتعرف على الـ id والـ role بدون أخطاء ---
declare module "next-auth" {
  interface User {
    role?: string;
  }
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      image: string | null;
      role: string;
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: number;
    role?: string;
  }
}
