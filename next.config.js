/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images : {
    domains: ['i.vimeocdn.com'],
    loader: 'akamai',
    path:"",
  },

  basePath: "/firststreet_fakesite",
  assetPrefix: "/firststreet_fakesite",

  
}

module.exports = nextConfig
