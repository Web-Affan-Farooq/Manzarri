import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";

import { ProfileData } from "@/@types/profiledata";
import { Notification } from "@/@types/notifications";
import {
  FetchNotificationAction,
  FetchProfileAction,
} from "@/actions/FetchProfileAction";
import { toast } from "sonner";

interface ProfileState extends ProfileData {
  notifications: Notification[];
  setInfo: () => void;
  isAuthenticated: boolean;
  setNotifications: () => void;
}

export const useProfile = create<ProfileState>()(
  persist(
    (set, get) => ({
      // ____ Data related to user ...
      _id: "",
      _updatedAt: "",
      userName: "",
      userEmail: "",
      lastLogin: "",
      isAdmin: false,
      isBlocked: false,

      // ____ for redirecting  ...
      isAuthenticated: true,

      notifications: [],
      setNotifications: async () => {
        const { _id } = get();
        const notifications = await FetchNotificationAction(_id);
        set({
          notifications: notifications || [],
        });
      },
      // ____ function for updating data ...
      setInfo: async () => {
        const {setNotifications} = get();
        const { message, success, info, redirect } = await FetchProfileAction();

        if (redirect && !success) {
          set({ isAuthenticated: false });
        }

        if (!success || !info) {
          toast.error(message);
        }

        if (info) {
          console.log(info);
          setNotifications();

          set(() => ({
            _id: info._id,
            _updatedAt: info._updatedAt,
            userName: info.userName,
            userEmail: info.userEmail,
            lastLogin: info.lastLogin,
            isAdmin: info.isAdmin,
            isBlocked: info.isBlocked,
            isAuthenticated: true,
          }));
          toast.message(message);
        }
      },
    }),
    {
      name: "profile-data",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
