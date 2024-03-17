/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: isProd ? 'export' : undefined,
  reactStrictMode: true,
  // assetPrefix: isProd ? 'https://ashley-wu.github.io/project_one/' : undefined,
  basePath: isProd ? '/project_one' : undefined,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        port: '',
        pathname: '**'
      }
    ]
  }
};

export default nextConfig;
