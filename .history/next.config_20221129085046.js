/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.brildor.com', 's3.amazonaws.com'],
  },
}

module.exports = nextConfig
