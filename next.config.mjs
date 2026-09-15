/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configured for flexible deployment (works seamlessly on Vercel, Node servers, or static hosting)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
