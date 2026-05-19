import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../prisma/client";
import bcrypt from "bcryptjs";
import crypto from "crypto";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
    
      /* const hashedPassword=crypto.createHash('sha1').update(credentials?.password!).digest('hex');*/
        // البحث عن الطالب في قاعدة البيانات
        const student = await prisma.student.findUnique({
          where: { email: credentials!.email },
          include: { profile: true }
        });
      if(!student ) {
          return null;
        }

        // التحقق من كلمة المرور
      const isValid = await bcrypt.compare(credentials.password, student.password);
        if (!isValid) {
          return null;
        }

        // إرجاع بيانات الطالب (نحوّل الـ id لنص ليتوافق مع NextAuth داخلياً)
        return {
          id: String(student.Mat),
          name: student.name,
          email: student.email,
          image: student.profile?.image || null,
          role:student.role,
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
        token.id = parseInt(user.id); // نخزن الـ id في التوكن
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
        token.role=user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as number;   // نضيف الـ id إلى الـ session
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.image = token.image as string | null;
        session.user.role=token.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };