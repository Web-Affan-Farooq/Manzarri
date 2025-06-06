"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { DashboardOption, InventoryOption, OrdersOption, SettingsOption, AccountsOption } from './Options';

const AdminHeader = () => {
  /* _____ router instance ... */
  const router = useRouter();

  /* _____ State for toogling sidebar... */
  const [navOpen, setNavOpen] = useState(false);

  /* _____ State for activating logout functions ... */
  const [logoutStatus, setlogoutStatus] = useState(false);

  /* _____ State for activating errors ... */
  const [error, seterror] = useState({
    active: false,
    message: "",
  });

  /* _____ useEffect for Logout ... */
  useEffect(() => {
    const logout = async () => {
      const response = await axios.get("/api/logout");
      const data = await response.data;
      if (!data.success) {
        seterror({
          active: true,
          message: data.message,
        });
      }
      /* _____ Show success fallback ... */
      toast.success(data.message);
      /* _____ redirect user... */
      router.push("/");
    }

    /* _____ Only run functions when state is true... */
    if (logoutStatus) {
      /* _____ Run the logout and then switch the logoutstatus ... */
      logout();
      setlogoutStatus(false);
    }
  }, [logoutStatus, router]);

  /* _____ useEffect checking for errors and show fallback ... */
  useEffect(() => {
    if (error.active) {
      toast(error.message);
      seterror({ ...error, active: false });
    }
  }, [error]);

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <aside className={`fixed z-20 top-0 left-0 h-full bg-gray-900 text-white w-64 p-6 transform transition-transform duration-300 ease-in-out ${navOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
        <nav className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
            <div className="flex flex-col gap-4">
              <DashboardOption />
              <InventoryOption />
              <OrdersOption />
              <AccountsOption />
              <SettingsOption />
            </div>
          </div>
          <button
            className="w-full text-left hover:text-white transition-all duration-150 ease-in-out cursor-pointer hover:bg-gray-400 py-2 px-3 rounded-md"
            aria-label="Logout"
            onClick={() => {
              setlogoutStatus(true);
            }}
          >
            Logout &nbsp; <i className="fa-solid fa-right-from-bracket"></i>
          </button>
        </nav>
      </aside>

      {/* Toggle Button */}
      <button
        className="md:hidden fixed top-4 right-4 z-30 text-white bg-gray-900 rounded-full p-3"
        onClick={() => setNavOpen(prev => !prev)}
        aria-label={navOpen ? "Close menu" : "Open menu"}
      >
        {navOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25H12" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default AdminHeader;