/** @type {import('next').NextConfig} */

// const repository = "https://saysang22.github.io/coffee/";
const nextConfig = {
  basePath: "/coffee",
  output: "export",
  trailingSlash: true,
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://saysang22.github.io/coffee/"
      : "",
};

module.exports = nextConfig;
