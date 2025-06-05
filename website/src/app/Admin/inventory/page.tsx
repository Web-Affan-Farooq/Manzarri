import React from 'react';
import {AdminPanelSidebar} from "@/components/layout";

const Admin = () => {
  return (
    <main className="flex min-h-screen bg-black text-white">
      <AdminPanelSidebar/>
      
      <div>
        Inventory
      </div>
      
    </main>
  );
};

export default Admin;