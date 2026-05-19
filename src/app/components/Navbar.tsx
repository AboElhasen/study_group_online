'use client';
import { signOut, useSession } from 'next-auth/react';
import { usePathname, useRouter } from "next/navigation";
import { useState } from 'react';
import { 
  LogOut, 
  Settings, 
  User, 
  MessageSquare, 
  LayoutDashboard, 
  ChevronDown,
  Bell
} from 'lucide-react';
import '../component.css';

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // إخفاء الـ Navbar بالكامل فقط إذا كنت تريد مساحة شاشة كاملة للشات
  // لكن الأفضل إبقاؤه بتصميم بسيط (Minimalist) كما في الكود أدناه
  const isChatPage = pathname === '/chat';
  const isLoginPage= pathname=='/login';

  return (
    <nav className={`modern-nav ${isChatPage ? 'chat-mode' : ''}`}>
      <div className="nav-container">
        
        {/* Branding / Logo */}
        <div className="nav-brand" onClick={() => router.push('/dashboard')}>
          <div className="logo-icon">
            <LayoutDashboard size={22} color="#fff" />
          </div>
          <span className="brand-name">Fahimni</span>
        </div>

        {/* Action Buttons & Profile */}
        <div className="nav-actions">
          {session ? (
            <div className="user-section">
              
              <div className="profile-menu-container">
                <button 
                  className="profile-trigger"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <img 
                    src={session.user?.image || "/imageSystem/noPhoto.jfif"} 
                    alt="User" 
                    className="avatar-img"
                  />
                </button>

                {isMenuOpen && (
                  <div className="dropdown-menu">
                    <div className="menu-header">
                      <p className="welcome-text">Bienvenue,</p>
                      <p className="user-name-text">{session.user?.name || "Étudiant"}</p>
                    </div>
                    
                    <div className="menu-divider"></div>
                    
                    <button onClick={() => router.push('/profile')}>
                      <User size={18} />
                      <span>Mon Profil</span>
                    </button>
                    
                    <button onClick={() => router.push('/settings')}>
                      <Settings size={18} />
                      <span>Paramètres</span>
                    </button>

                    <button onClick={() => router.push('/chat')}>
                      <MessageSquare size={18} />
                      <span>Messages</span>
                    </button>
                    
                    <div className="menu-divider"></div>
                    
                    <button className="logout-btn-dropdown" onClick={() => signOut({ callbackUrl: "/" })}>
                      <LogOut size={18} />
                      <span>Déconnexion</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : 
      (!isLoginPage &&
            <button className="login-btn-modern" onClick={() => router.push('/login')}>
              Se connecter
            </button>)
          }
        </div>
      </div>
    </nav>
  );
}