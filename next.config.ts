import type { NextConfig } from "next";

const isVercel = process.env.VERCEL === '1';

const nextConfig: NextConfig = {
  output: isVercel ? undefined : 'export',
  basePath: isVercel ? '' : '/Bright-Ideas',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
