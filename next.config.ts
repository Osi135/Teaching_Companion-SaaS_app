import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // devIndicators: false
  images: {
    remotePatterns: [
      { hostname: 'img.clerk.com' },
    ]
  }
};

export default nextConfig;
