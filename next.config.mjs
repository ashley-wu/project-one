/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: isProd ? 'export' : undefined,
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://ashley-wu.github.io/ProjectOne' : undefined,
  // basePath: isProd ? '/ProjectOne' : undefined,
};

export default nextConfig;
