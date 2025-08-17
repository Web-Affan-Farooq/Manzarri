import React from 'react';
import { AdminPanelSidebar } from "@/components/layout";
import { SettingsSection } from '@/components/pages/Admin';

const AdminSettings = () => {
    return (
        <main className="flex min-h-screen bg-black text-white">
            <AdminPanelSidebar />
            <div className='p-[20px] w-full'>
                <SettingsSection />
            </div>
        </main>
    );
};

export default AdminSettings;