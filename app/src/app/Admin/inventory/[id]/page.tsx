import React from 'react';
import { AdminPanelSidebar } from "@/components/layout";
import { InventoryProductDetailsSection } from '@/components/pages/Admin';

const RestockProductsPage = async ({params}:{params:Promise<{id:string}>}) => {
    const {id} = await params;
  return (
    <>
      <main>
        <article className="flex min-h-screen bg-black text-white">
          <AdminPanelSidebar />
          <InventoryProductDetailsSection productId={id}/>
        </article>
      </main>
    </>
  );
};

export default RestockProductsPage;
