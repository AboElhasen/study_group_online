
import type { NextConfig } from "next";

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public", // هذا يحدد أين سيوضع ملف السيرفس وركر تلقائياً
  register: true, // تفعيل السيرفس وركر تلقائياً عند دخول المستخدم
  skipWaiting: true, // تحديث السيرفس وركر فوراً عند وجود نسخة جديدة
  disable: process.env.NODE_ENV === "development", // إيقافه في مرحلة التطوير لكي لا يضايقك الكاش أثناء التعديل
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // إعدادات موقعك الأخرى هنا (إن وجدت)
  trailingSlash: true,
 turbopack:{},
};


module.exports = withPWA(nextConfig);
