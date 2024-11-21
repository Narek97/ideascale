import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*/',
        destination: '/:path*/login',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
