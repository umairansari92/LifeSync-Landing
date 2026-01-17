import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image Optimization
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance & SEO
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  
  // Headers for performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
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
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app-lifesynchub.vercel.app';
    return [
      // Old URL redirects
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/terms-of-service',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/cookie-policy-old',
        destination: '/cookie-policy',
        permanent: true,
      },
      // App redirects
      {
        source: '/app',
        destination: appUrl,
        permanent: false,
      },
      {
        source: '/login',
        destination: `${appUrl}/login`,
        permanent: false,
      },
      {
        source: '/register',
        destination: `${appUrl}/register`,
        permanent: false,
      },
      {
        source: '/dashboard',
        destination: appUrl,
        permanent: false,
      },
    ];
  },

  // Rewrites for clean URLs
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap',
        },
      ],
    };
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://app-lifesynchub.vercel.app',
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || 'https://lifesync-backend-1jhd.onrender.com',
  },
};

export default nextConfig;
