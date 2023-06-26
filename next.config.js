/** @type {import('next').NextConfig} */

// const repository = "https://saysang22.github.io/coffee/";
const nextConfig = {
  basePath: "/coffee",
  output: "export",
  exportTrailingSlash: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
