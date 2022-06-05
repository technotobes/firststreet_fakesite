/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images : {
    domains: ['i.vimeocdn.com'],
    loader: 'akamai',
    path:"",
  },

  basePath: "/nextjs-pages",
  assetPrefix: "/nextjs-pages",

  
}

module.exports = nextConfig
