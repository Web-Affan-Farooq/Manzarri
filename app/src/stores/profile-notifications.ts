import { Notification } from "@/@types/notifications";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ProfileNotificationState {
  notifications: Notification[];
  setNotifications: (list: Notification[]) => void;
  deleteNotification: (id: string) => void;
}
export const useProfileNotifications = create<ProfileNotificationState>()(
  persist(
    (set) => ({
      notifications: [],

      setNotifications: (list) =>
        set(() => ({
          notifications: list,
        })),

      deleteNotification: (id) =>
        set((state) => ({
          notifications: state.notifications.filter((n) => n._id !== id),
        })),
    }),
    {
      name: "profile-notifications",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
