/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "al-mashhad-dev-bucket\\.s3-eu-west-1\\.amazonaws\\.com",
      },
    ],
  },
};

export default nextConfig;
