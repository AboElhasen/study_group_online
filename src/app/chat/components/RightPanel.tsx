import React from 'react';
import { Download, Plus } from 'lucide-react';
import styles from '../chatStyles';

interface RightPanelProps {
  activeTab: 'individuals' | 'groups' | null;
  studentMembers: any[];
  resources: any[];
}

const RightPanel: React.FC<RightPanelProps> = ({ activeTab, studentMembers, resources }) => (
  <div style={styles.rightPanel}>
    <div>
      {activeTab === 'groups' && (
        <>
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#9ca3af', marginBottom: '15px' }}>Membres</div>
          {studentMembers.map(member => (
            <div key={member.Mat} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
              <img src={member.profile?.image} alt="file" style={{ padding: '5px', borderRadius: '100%', width: '50px', height: '50px' }} />
              <span style={{ fontSize: '13px' }}>{member.name}</span>
            </div>
          ))}
        </>
      )}
    </div>
    <div style={{ marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <span style={{ fontSize: '14px', fontWeight: 600, color: '#9ca3af' }}>Ressources</span>
        <span style={{ color: '#3b82f6', fontSize: '12px', cursor: 'pointer' }}>Voir tout</span>
      </div>
      {resources.slice(0, 3).map(res => (
        <div key={res.id} style={{ background: '#1a1d26', padding: '10px', borderRadius: '10px', display: 'flex', gap: '12px', marginBottom: '10px', border: '1px solid #2d323e' }}>
          <div style={{ background: '#ef4444', padding: '5px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold' }}>PDF</div>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <div style={{ fontSize: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{res.name}</div>
            <div style={{ fontSize: '10px', color: '#6b7280' }}>{(res.size / 1024 / 1024).toFixed(2)} MB</div>
          </div>
          <Download size={14} style={{ cursor: 'pointer' }} onClick={() => window.open(res.filepath, '_blank')} />
        </div>
      ))}
    </div>
  </div>
);

export default RightPanel;
