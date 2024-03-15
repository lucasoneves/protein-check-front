/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER: process.env.SERVER,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**'
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/signin',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
