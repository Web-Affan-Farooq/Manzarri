import React from 'react';
import {ProfileSidebar} from "@/components/layout";
import { WishlistSection } from '@/components/pages/Profile';

const CartPage= () => {
  return (
    <main className='flex min-h-screen'>
      <ProfileSidebar />
      <WishlistSection/>
    </main>
  );
};

export default CartPage;
