/** @type {import('next').NextConfig} */

const repository = "https://saysang22.github.io/coffee/";
const isDev = process.env.NODE_ENV === "development";
const nextConfig = {
  basePath: isDev ? "" : "/coffee",
  output: "export",
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/coffee" : "",
  env: {
    VIDEO_ADDRESS: isDev ? "/coffee_mv.mp4" : "/coffee/coffee_mv.mp4",
    usePathname: process.env.USE_PATHNAME === true,
  },
};

module.exports = nextConfig;
