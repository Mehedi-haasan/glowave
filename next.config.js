/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/glowave',
  assetPrefix: '/glowave',

  images: {
    domains: ['d3aj5vjnhssdu4.cloudfront.net', 's3-alpha-sig.figma.com'],
  },
};

module.exports = nextConfig;
