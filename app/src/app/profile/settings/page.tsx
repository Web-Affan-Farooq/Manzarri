import React from 'react'
import {ProfileSidebar} from "@/components/layout";
import { SettingsSection } from '@/components/pages/Profile';

const SettingsPage = () => {
  return (
    <main className="flex min-h-screen w-full">
      <ProfileSidebar />
      <SettingsSection/>
    </main>  )
}

export default SettingsPage
