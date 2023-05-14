/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost']
  },
  async redirects() {
    return [
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
