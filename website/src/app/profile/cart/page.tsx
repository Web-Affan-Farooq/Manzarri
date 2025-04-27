import React from 'react';
import UserProfileHeader from '@/components/Header/UserProfiles/Header';
import ProfileSection from '../../../components/Profile-Sections/CartSection';

const CartPage= () => {
  return (
    <main className="flex min-h-screen">
      <UserProfileHeader />
      <ProfileSection />
    </main>
  );
};

export default CartPage;
