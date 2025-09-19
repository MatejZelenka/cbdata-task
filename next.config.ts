import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  // turbopack: {
  //   root: './pnpm-lock.yaml',
  // },
};

export default nextConfig;
