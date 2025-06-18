import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/context/AuthProviders";

// import {
//   QueryClient,
//   QueryClientProvider
// } from "@tanstack/react-query";

export const metadata: Metadata = {
  title: "Manzarri | Drape Yourself in Luxury",
  description: "Explore various varieties of jewelleries ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const client = new QueryClient();

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>
        {/* <QueryClientProvider client={client}> */}
          <AuthProvider>
            <Toaster reverseOrder={false} position="top-left" />
            <Header />
            {children}
            <Footer />
          </AuthProvider>
        {/* </QueryClientProvider> */}
      </body>
    </html>
  );
}
