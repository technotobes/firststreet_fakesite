/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images : {
    domains: ['i.vimeocdn.com'],
    formats: ['image/avif', 'image/webp'],
  },


}

module.exports = nextConfig
