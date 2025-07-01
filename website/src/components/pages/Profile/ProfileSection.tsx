"use client";
import React, { useEffect, useState } from 'react';
import sanityClient from '@/lib/sanity';
import { Notification } from '@/@types/notifications';

const ProfileSection = () => {
  const [notifications, setnotifications] = useState([]);
  useEffect(() => {
    const id = window.localStorage.getItem("userID");
    if (id) {
      const fetchNotifications = async () => {
        const response = await sanityClient.fetch(`*[_type == "Notifications" && userId == "${id}"]{
              notificationTitle,
    notificationText,
    notificationType,
    isSeen,
          }`);
          // console.log(response);
        setnotifications(response);
      }
      fetchNotifications();
    }
  }, []);
  return (
    <section className="flex-1 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 px-8 py-4">Dashboard</h1>

      <div className="flex flex-col gap-4 px-8 max-sm:px-3">
        {
          notifications.map((notification: Notification, idx) => {
            return <div
              className="bg-white shadow-md p-2 rounded-xl flex items-start gap-4 border border-gray-200 w-full max-w-md"
              key={idx}
            >
              <i className="fa-solid fa-check text-green-500 text-lg mt-1"></i>
              <div className="text-sm text-black">
                <h1 className="font-semibold text-base">{notification.notificationTitle}</h1>
                <p className="mt-1 text-gray-700">{notification.notificationText}</p>
              </div>
            </div>
          })
        }

        {/* <div className="bg-white shadow-md p-4 rounded-lg flex items-center gap-4">
          <i className="fa-solid fa-truck text-blue-500 text-xl"></i>
          <span>Your order #12345 has been shipped!</span>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg flex items-center gap-4">
          <i className="fa-solid fa-lock text-green-500 text-xl"></i>
          <span>Your password was changed successfully.</span>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg flex items-center gap-4">
          <i className="fa-solid fa-tags text-yellow-500 text-xl"></i>
          <span>New Offer: Get 20% off on your next purchase!</span>
        </div> */}
      </div>
    </section>

  );
};

export default ProfileSection;