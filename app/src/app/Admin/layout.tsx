import type { Metadata } from "next";
import { FetchDashboardData } from "@/components/layout/";

export const metadata: Metadata = {
  title: "Manzarri | Admin dashboard",
  description: "Admin dashboard for manzarri ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <FetchDashboardData>{children}</FetchDashboardData>;
}
