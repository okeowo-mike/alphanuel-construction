/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 This replaces "next export"
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '/alphanuel-construction', // 👈 must match your GitHub repo name
  assetPrefix: '/alphanuel-construction/',
};

export default nextConfig;
