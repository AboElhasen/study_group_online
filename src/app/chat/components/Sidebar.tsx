import React from 'react';
import styles from '../chatStyles';
import { useApp, useSocket } from '@/app/components/providers';

interface SidebarProps {
  groups: any[];
  students: any[];
  currentUserId: number;
  selectedGroupId: number;
  setSelectedGroupId: (id: number) => void;
  receiver:number;
   setReceiver: (id: number) => void;
  activeTab: 'individuals' | 'groups' | null;
  setActiveTab: (tab: 'individuals' | 'groups') => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  groups,
  students,
  currentUserId,
  selectedGroupId,
  setSelectedGroupId,
  receiver,
  setReceiver,
  activeTab,
  setActiveTab,
}) => {
    
    return(
  <div style={styles.sidebar}>
    <div style={{ padding: '0 20px', fontSize: '12px', color: '#6b7280', fontWeight: 700, marginBottom: '10px' }}>MES GROUPES</div>
    {groups.map(group => (
      <div
        key={group.id}
        style={styles.navItem(selectedGroupId === group.id && activeTab === 'groups')}
        onClick={() => { setSelectedGroupId(group.id); setReceiver(currentUserId); setActiveTab('groups'); }}
      >
        <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#3b82f6' }} />
        {group.name}
      </div>
    ))}
    <div style={{ padding: '20px 20px 10px', fontSize: '12px', color: '#6b7280', fontWeight: 700 }}>STUDENTS</div>
    {students.filter(s => s.Mat !== currentUserId).map(student => (
      <div
        key={student.Mat}
        style={styles.navItem(receiver === student.Mat && activeTab === 'individuals')}
        onClick={() => { setReceiver(student.Mat); setSelectedGroupId(0); setActiveTab('individuals'); }}
      >
        {student.name}
      </div>
    ))}
  </div>
)}

export default Sidebar;
