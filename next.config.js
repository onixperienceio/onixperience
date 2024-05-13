/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   unoptimized: true
  // },
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/performances',
      //   permanent: true,
      // },
      {
        source: '/projects',
        destination: '/performances',
        permanent: true,
      },
    ]
  },
  optimizeFonts: false,
}

module.exports = nextConfig

