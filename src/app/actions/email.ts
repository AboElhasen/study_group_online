'use server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,     // مثل: smtp.gmail.com
  port: Number(process.env.SMTP_PORT), // 465 أو 587
  secure: process.env.SMTP_SECURE === 'true', // true لـ 465، false لـ 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    await transporter.sendMail({
      from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
      to,
      subject,
      html,
    });
    return { success: true };
  } catch (error) {
    console.error('فشل إرسال البريد:', error);
    return { success: false, error: String(error) };
  }
}