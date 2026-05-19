'use client';
import React from 'react';
import AdminLayout from '../components/AdminLayout';
import SettingsTabs from './SettingsTabs';

export default function SettingsPage() {
  return (
    <AdminLayout>
      <h1 style={{ marginBottom: 24 }}>System Settings</h1>
      <SettingsTabs />
    </AdminLayout>
  );
}
