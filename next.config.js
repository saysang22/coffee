/** @type {import('next').NextConfig} */

const repository = "https://saysang22.github.io/coffee/";
const isDev = process.env.NODE_ENV === "development";
const nextConfig = {
  basePath: isDev ? "" : "/coffee",
  output: "export",
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/coffee" : "",
  experimental: {
    images: true,
  },
  env: {
    VIDEO_ADDRESS: isDev ? "/coffee_mv.mp4" : "/coffee/coffee_mv.mp4",
    usePathname: process.env.USE_PATHNAME === true,
    GITHUB_ID: "0e93c4ed4d618d45c75b",
    basePath: isDev ? "" : "/coffee",

    // NEXTAUTH_URL: isDev ? "/api/auth/" : "/coffee/api/auth/",
  },
};

module.exports = nextConfig;
