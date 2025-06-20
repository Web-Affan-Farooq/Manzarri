import React from 'react';
import {AdminPanelSidebar} from "@/components/layout";
import { EventSection } from '@/components/pages/Admin';

const EventsPage = () => {
  return (
    <main className="flex min-h-screen bg-black text-white">
      <AdminPanelSidebar/>
      
      <div className='w-full'>
        <EventSection/>
      </div>
      
    </main>
  );
};

export default EventsPage;