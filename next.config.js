/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Add your GitHub repository name here
  basePath: process.env.NODE_ENV === "production" ? "/your-repo-name" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/your-repo-name/" : "",
}

module.exports = nextConfig
