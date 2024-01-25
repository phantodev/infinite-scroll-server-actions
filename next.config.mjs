/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.punkapi.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
