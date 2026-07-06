import type { NextConfig } from "next";

const isVercel = process.env.VERCEL === '1';

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://cdn.vercel-insights.com https://www.googletagmanager.com https://www.google-analytics.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: blob: https://wa.me https://www.googletagmanager.com https://ssl.gstatic.com https://www.gstatic.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.google.com https://www.google-analytics.com;
  font-src 'self' https://fonts.gstatic.com data:;
  connect-src 'self' https://vitals.vercel-insights.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.g.doubleclick.net https://*.google.com;
  frame-src 'self' https://bid.g.doubleclick.net;
  media-src 'self';
`.replace(/\s{2,}/g, ' ').trim();

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy
  }
];

const nextConfig: NextConfig = {
  output: isVercel ? undefined : 'export',
  basePath: isVercel ? '' : '/Bright-Ideas',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
