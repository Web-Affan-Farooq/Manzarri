import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";

import { ProfileData } from "@/@types/profiledata";
import { Notification } from "@/@types/notifications";

interface ProfileState extends ProfileData {
  notifications:Notification[];
  setInfo: (info:ProfileData) => void;
  setNotifications: (list: Notification[]) => void;
}

export const useProfile = create<ProfileState>()(
  persist(
    (set) => ({
      // ____ Data related to user ...
      _id:"",
      _updatedAt:"",
      userName: "",
      userEmail: "",
      lastLogin: "",
      isAdmin: false,
      invited: false,
      isBlocked: false,
      notifications: [],
      
      // ____ function for updating data ...
      setInfo: (info) =>
        set(() => ({
               _id:info._id,
      _updatedAt:info._updatedAt,
      userName: info.userName,
      userEmail: info.userEmail,
      lastLogin: info.lastLogin,
      isAdmin: info.isAdmin,
      invited: info.invited,
      isBlocked: info.isBlocked,
        })),

      // ____ function for updating notifications ...
      setNotifications: (list) =>
        set(() => ({
          notifications: list,
        })),
    }),
    {
      name: "profile-data",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
