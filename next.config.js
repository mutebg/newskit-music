/** @type {import('next').NextConfig} */

const rewrites = () => {
  return [
    {
      source: "/deezer/:path*",
      destination: "https://api.deezer.com/:path*",
    },
  ];
};

const nextConfig = {
  reactStrictMode: true,
  rewrites,
};

module.exports = nextConfig;
