import React, { useState } from 'react';

const tabs = [
  { key: 'general', label: 'General Profile' },
  { key: 'security', label: 'Security' },
  { key: 'preferences', label: 'System Preferences' },
];

export default function SettingsTabs() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div>
      <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              padding: '8px 20px',
              borderRadius: 8,
              border: 'none',
              background: activeTab === tab.key ? '#38bdf8' : '#f1f5f9',
              color: activeTab === tab.key ? '#fff' : '#334155',
              fontWeight: 500,
              cursor: 'pointer',
              fontSize: 16,
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={{ background: '#fff', borderRadius: 12, padding: 24, minHeight: 200 }}>
        {activeTab === 'general' && <div>General Profile settings go here.</div>}
        {activeTab === 'security' && <div>Security (Password) settings go here.</div>}
        {activeTab === 'preferences' && <div>System Preferences settings go here.</div>}
      </div>
    </div>
  );
}
