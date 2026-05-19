import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import styles from '../admin.module.css';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.adminLayout}>
      <Sidebar />
      <div className={styles.mainArea}>
        <Topbar />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
