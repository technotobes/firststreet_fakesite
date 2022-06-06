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

}

module.exports = nextConfig
