"use client";

import { useProfile } from "@/stores/profile";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const FetchProfile = ({ children }: { children: React.ReactNode }) => {
  // ____ for setting data in global state ...
  const { setInfo, isAuthenticated } = useProfile();
  const router = useRouter();

  useEffect(() => {
    const getData = () => {
      console.log(
        "------------------Running data fetches ----------------------"
      );
      setInfo();
      console.log(
        "------------------Running data fetches ----------------------"
      );
    };

    getData();
    setInterval(() => {
      getData();
    }, 180000);
  }, [router, setInfo]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return <>{children}</>;
};

export default FetchProfile;
