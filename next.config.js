/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    domains: [
      "images.createoto.vercel.app"
    ],
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'scontent.cdninstagram.com',
        //   port: '',
        //   pathname: '/account123/**',
        },
      ],
  },
};
