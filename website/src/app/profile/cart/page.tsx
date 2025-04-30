import React from 'react';
import UserProfileHeader from '@/components/Header/UserProfiles/Header';
import CartSection from './CartSection';

const CartPage= () => {
  return ( 
    <main className="flex min-h-screen">
      <UserProfileHeader />
      <CartSection/>
    </main>
  );
};

export default CartPage;
