import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/qrcode-component',
  assetPrefix: "/qrcode-component",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
