import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import styles from '../admin.module.css';

export default function Topbar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.searchBar}>
        <Search size={18} />
        <input type="text" placeholder="Search students or groups..." />
      </div>
      <div className={styles.topbarRight}>
        <button className={styles.iconBtn} aria-label="Notifications">
          <Bell size={20} />
        </button>
        <div className={styles.profileDropdown}>
          <User size={24} />
          <span className={styles.profileName}>Admin</span>
          {/* Dropdown menu placeholder */}
        </div>
      </div>
    </header>
  );
}
