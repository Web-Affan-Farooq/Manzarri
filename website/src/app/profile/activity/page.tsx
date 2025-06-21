import React from 'react';
import {ProfileSidebar} from "@/components/layout";
import { AccountActivitySection } from '@/components/pages/Profile';

const AccountAtivity= () => {
  return ( 
    <main className="flex min-h-screen">
      <ProfileSidebar />
      <AccountActivitySection/>
    </main>
  );
};

export default AccountAtivity;
