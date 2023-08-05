/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // disable eslint on build
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    domains: [
      'localhost',
      'fasraf-dashboard.onrender.com',
      'res.cloudinary.com',
    ],
  },
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}',
    },
  },
  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig;
