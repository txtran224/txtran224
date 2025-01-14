/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Update this to match your GitHub repository name
  basePath: '/your-repo-name',
  assetPrefix: '/your-repo-name',
}

module.exports = nextConfig