/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "logos-world.net",
      "cdn-icons-png.flaticon.com",
      "avatars.dicebear.com",
      "picsum.photos",
    ],
  },
};

module.exports = nextConfig;
