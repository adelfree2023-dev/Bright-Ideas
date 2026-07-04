import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Bright-Ideas',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
