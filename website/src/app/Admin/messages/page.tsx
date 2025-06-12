import React from 'react';
import { AdminPanelSidebar } from "@/components/layout";
import { MessagesSection } from '@/components/pages/Admin';

const MessagesPage = () => {
  return (
    <main className="flex min-h-screen bg-black text-white">
      <AdminPanelSidebar />
      <div className='w-full'>
        <MessagesSection />
      </div>
    </main>
  );
};

export default MessagesPage;