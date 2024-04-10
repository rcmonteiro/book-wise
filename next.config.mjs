/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.google.com',
        port: '',
      },
      {
        protocol: 'http',
        hostname: '**.google.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
      },
    ],
  },
}

export default nextConfig
