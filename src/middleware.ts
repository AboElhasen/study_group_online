// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default withAuth(
  function middleware(request: NextRequest) {
    // @ts-ignore
    const token = request.nextauth?.token;
    const path = request.nextUrl.pathname;
    const role = token?.role as string;

    // 1. منع الأدمن من دخول صفحة dashboard
    if (role == "admin" && path.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    // 2. منع الطالب العادي من دخول صفحة admin
    if (role !== "admin" && path.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // 3. باقي الصفحات (groups, profile, chat, etc.) مسموح للجميع بعد تسجيل الدخول
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // أي مستخدم مسجل دخول يمكنه الدخول للصفحات المحمية
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",    // فقط للطلاب
    "/admin/:path*",        // للطلاب والأدمن (مسموح للجميع)
    "/profile/:path*",      // للطلاب والأدمن
    "/chat/:path*",         // للطلاب والأدمن
    "/chats/:path*",        // للطلاب والأدمن
    "/makeProfile/:path*",  // للطلاب والأدمن
  ],
};