"use client";

import { useProfile } from "@/stores/profile";
import { useEffect } from "react";
import {
  FetchProfileAction,
  FetchNotificationAction,
} from "@/actions/FetchProfileAction";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const FetchProfile = ({ children }: { children: React.ReactNode }) => {
  // ____ for setting data in global state ...
  const { setInfo, setNotifications } = useProfile();
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      try {
        const { message, success, info, redirect } = await FetchProfileAction();
        if (!success && !info) {
          toast.error(message);
        } else if (redirect && !success) {
          router.push("/login");
        } else if (info) {
          const notifications = await FetchNotificationAction(info._id);
          if (notifications) {
            setInfo(info);
            setNotifications(notifications);
          }
        }
      } catch (err) {
        console.log(err);
        toast.error("An error occured");
      }
    };

    getData();
    setInterval(() => {
      getData();
    }, 180000);
  }, [router, setInfo, setNotifications]);

  return <>{children}</>;
};

export default FetchProfile;
