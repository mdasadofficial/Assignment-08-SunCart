/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        
        hostname: "ibb.co.com"
      },
    ],
  },
};

export default nextConfig;
