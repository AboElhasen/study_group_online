import React, { useState, CSSProperties } from 'react';

interface ToggleSwitchProps {
  isCheck: boolean; // علامة الاستفهام تعني أن القيمة قد تكون undefined
}
export default function ToggleSwitch({isCheck}:ToggleSwitchProps) {
  // حالة (State) للتحكم في الزر وتحديد التنسيقات بناءً عليها
  const [isChecked, setIsChecked] = useState<boolean>(isCheck);

  // تعريف التنسيقات ككائن (Object) داخل المكون
  const styles: { [key: string]: CSSProperties } = {
    container: {
      display: 'inline-block',
      cursor: 'pointer',
    },
    input: {
      display: 'none',
    },
    track: {
      width: '64px',
      height: '34px',
      // تغيير لون الخلفية بناءً على حالة الزر
      backgroundColor: isChecked ? '#1d72b8' : '#333',
      borderRadius: '34px',
      position: 'relative',
      transition: 'background-color 0.3s ease',
    },
    thumb: {
      width: '26px',
      height: '26px',
      // تغيير لون الخلفية والإطار والتحريك بناءً على الحالة
      backgroundColor: isChecked ? '#0d1117' : '#fff',
      border: isChecked ? '2px solid #80c4ff' : '2px solid transparent',
      borderRadius: '50%',
      position: 'absolute',
      top: '4px',
      left: '4px',
      transform: isChecked ? 'translateX(30px)' : 'translateX(0)',
      transition: 'transform 0.3s ease, background-color 0.3s ease, border 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
    },
    icon: {
      width: '14px',
      height: '14px',
      stroke: '#80c4ff',
      opacity: isChecked ? 1 : 0,
      transform: isChecked ? 'scale(1)' : 'scale(0.5)',
      transition: 'opacity 0.3s ease, transform 0.3s ease',
    },
  };

  return (
    <label style={styles.container}>
      <input
        type="checkbox"
        checked={isCheck}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsChecked(e.target.checked)}
        style={styles.input}
      />
      <div style={styles.track}>
        <div style={styles.thumb}>
          {/* رسم علامة الصح */}
          <svg
            style={styles.icon}
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      </div>
    </label>
  );
};

