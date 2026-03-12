import type { Metadata } from "next";
import { OfferPopup } from "@/components/common";
import FetchProfile from "./_components/Layout/FetchProfileData";

export const metadata: Metadata = {
  title: "Profile | Manzarri",
  description: "Check your profile",
};

export default function MarketplaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <OfferPopup />
      <FetchProfile>{children}</FetchProfile>
    </>
  );
}
