/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c4.wallpaperflare.com',

      }
    ]
  }
}
module.exports = nextConfig;