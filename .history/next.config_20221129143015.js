/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.brildor.com', 's3.amazonaws.com', 'support.content.office.net', 'ph-files.imgix.net', 'img.lalr.co'],
  },
}

module.exports = nextConfig
