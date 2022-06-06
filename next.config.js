/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images : {
    domains: ['i.vimeocdn.com'],
    loader: 'akamai',
    path:"",
    formats: ['image/avif', 'image/webp'],
  },


  basePath: "/firststreet_fakesite",
  imagesPublicPath: "/firststreet_fakesite/_next/public/images",

  
}

module.exports = nextConfig
