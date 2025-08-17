import React from 'react';
import {ProfileSidebar} from "@/components/layout";
import { CartSection } from '@/components/pages/Profile';

const CartPage= () => {
  return ( 
    <main className="flex min-h-screen">
      <ProfileSidebar />
      <CartSection/>
    </main>
  );
};

export default CartPage;
