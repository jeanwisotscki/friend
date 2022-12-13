/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["m.media-amazon.com", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
