/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
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
