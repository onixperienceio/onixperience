/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost']
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/un001',
  //       permanent: true,
  //     },
  //   ]
  // },
  optimizeFonts: false,
}

module.exports = nextConfig
