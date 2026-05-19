'use client';
import { usePathname } from "next/navigation";
import { Code2, Globe, Copyright } from 'lucide-react';
import '../component.css';

export default function Footer() {
  const pathname = usePathname();
  
  // في صفحة الشات، غالباً ما نفضل إخفاء الفوتر تماماً لتوسيع منطقة المحادثة
  if (pathname === '/chat') return null;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      <div className="footer-container">
        <div className="footer-left">
          <Copyright size={14} />
          <span>{currentYear} <strong>Fahimni</strong>. Tous droits réservés.</span>
        </div>

        <div className="footer-center">
          <p className="footer-tagline">Conçu pour l'excellence académique</p>
        </div>
        <div className="footer-right">
          <div className="status-indicator">
            <span className="dot"></span>
            Système en ligne
          </div>
        </div>
      </div>
    </footer>
  );
}