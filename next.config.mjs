/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NEXT_PUBLIC_DEPLOY_ENV === "GITHUB_PAGES";

const nextConfig = {
  output: "export", // optional: keep if you want static export for GitHub Pages
  images: { unoptimized: true },
  trailingSlash: true,
  // Only use basePath/assetPrefix when deploying to GitHub Pages
  basePath: isGithubPages ? "/alphanuel-construction" : "",
  assetPrefix: isGithubPages ? "/alphanuel-construction/" : "",
};

export default nextConfig;
