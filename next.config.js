/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images : {
    domains: ['i.vimeocdn.com'],
    loader: 'akamai',
    path:"",
  },

  
}

module.exports = nextConfig
