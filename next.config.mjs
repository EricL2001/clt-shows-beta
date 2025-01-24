/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'visulite.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'neighborhoodtheatre.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'humanitix.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

