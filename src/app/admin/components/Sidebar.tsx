import React from 'react';
import { Home, Users, Layers, Shield, Settings } from 'lucide-react';
import Link from 'next/link';
import styles from '../admin.module.css';

const navLinks = [
  { href: '/admin', label: 'Dashboard', icon: <Home size={20} /> },
  { href: '/admin/students', label: 'Students Management', icon: <Users size={20} /> },
  { href: '/admin/groups', label: 'Groups Management', icon: <Layers size={20} /> },
  { href: '/admin/roles', label: 'Roles & Permissions', icon: <Shield size={20} /> },
  { href: '/admin/settings', label: 'Settings', icon: <Settings size={20} /> },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.navLink}>
                <span className={styles.icon}>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
