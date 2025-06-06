import type {NextConfig} from 'next';
module.exports = {
  output: 'export',
  experimental: {
    serverActions: false, // Disable experimental Server Actions
  },
};
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
