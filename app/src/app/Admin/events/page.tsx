// import React from 'react';
// import {AdminPanelSidebar} from "@/components/layout";
// import { EventsSection } from '@/components/pages/Admin'; 

// const EventsPage = () => {
//   return (
//     <main className="flex min-h-screen bg-black text-white">
//       <AdminPanelSidebar/>
      
//       <div className='w-full'>
//         <EventsSection/>
//       </div>
      
//     </main>
//   );
// };

// export default EventsPage;


import React from 'react';
import { AdminPanelSidebar } from "@/components/layout";
import { EventsSection} from '@/components/pages/Admin';

const Admin = () => {
  return (
    <>
      <main className="flex min-h-screen bg-black text-white">
        <AdminPanelSidebar />
        <div className='w-full p-5 h-[100vh] overflow-y-auto gray-scroller'>
          <h1 className='text-2xl font-bold my-[20px]'>Events</h1>
          <EventsSection/>
        </div>
      </main>
    </>
  );
};

export default Admin;