import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Added for static export
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true, // Added for GitHub Pages compatibility
  },
};

export default nextConfig;
