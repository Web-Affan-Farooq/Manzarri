import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['http://192.168.1.109:3000'],
  images: {
    remotePatterns: [
      {
        hostname:"cdn.sanity.io",
        protocol:"https",
      }
    ]
  }
};

export default nextConfig;
