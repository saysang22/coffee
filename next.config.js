/** @type {import('next').NextConfig} */

// const repository = "https://saysang22.github.io/coffee/";
const nextConfig = {
  basePath: "/coffee",
  assetPrefix: "/coffee",
  output: "standalone",
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
