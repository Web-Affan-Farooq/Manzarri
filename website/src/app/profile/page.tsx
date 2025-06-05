import React from 'react';
import {ProfileSidebar} from "@/components/layout";
import { ProfileSection } from '@/components/pages/Profile';

const Profile = () => {
  return (
    <main className="flex min-h-screen">
      <ProfileSidebar/>
      <ProfileSection />
    </main>
  );
};

export default Profile;