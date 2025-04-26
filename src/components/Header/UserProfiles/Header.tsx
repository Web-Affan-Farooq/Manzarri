import React from 'react';
import Link from 'next/link';

const UserProfileHeader = () => {
  return (
    <aside className="border-r-2 border-solid border-gray-300 h-screen bg-gray-900 text-white w-64 p-6 flex flex-col flex-nowrap justify-between items-start">
      <nav className="flex flex-col gap-6 w-full">
        <h2 className="text-2xl font-bold mb-8">Profile</h2>
        <div className="flex flex-col gap-4">
          <Link href={"/profile/cart"} className="hover:text-white w-full transition-all duration-100 ease-in-out cursor-pointer hover:bg-[var(--faun-light)] py-[5px] px-[10px] rounded-md">🛒 Cart</Link>
          <Link href={"/profile/cart"} className="hover:text-white w-full transition-all duration-100 ease-in-out cursor-pointer hover:bg-[var(--faun-light)] py-[5px] px-[10px] rounded-md">❤️ Liked Items</Link>
          <Link href={"/profile/cart"} className="hover:text-white w-full transition-all duration-100 ease-in-out cursor-pointer hover:bg-[var(--faun-light)] py-[5px] px-[10px] rounded-md">📈 Your Activity</Link>
          <Link href={"/profile/cart"} className="hover:text-white w-full transition-all duration-100 ease-in-out cursor-pointer hover:bg-[var(--faun-light)] py-[5px] px-[10px] rounded-md">⚙️ Settings</Link>
        </div>
      </nav>

      <div className="hover:text-white w-full transition-all duration-100 ease-in-out cursor-pointer hover:bg-[var(--faun-light)] py-[5px] px-[10px] rounded-md">Logout </div>
    </aside>
  );
};

export default UserProfileHeader;
