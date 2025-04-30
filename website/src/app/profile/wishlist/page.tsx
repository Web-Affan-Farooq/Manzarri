import React from 'react';
import UserProfileHeader from '@/components/Header/UserProfiles/Header';
import WishlistSection from './WishlistSection';

const CartPage= () => {
  return (
    <main className='flex min-h-screen'>
      <UserProfileHeader />
      <WishlistSection/>
    </main>
  );
};

export default CartPage;
