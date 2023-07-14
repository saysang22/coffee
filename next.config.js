/** @type {import('next').NextConfig} */

const repository = "https://saysang22.github.io/coffee/";
const isDev = process.env.NODE_ENV === "development";
const nextConfig = {
  basePath: isDev ? "" : "/coffee",
  assetPrefix: isDev ? "" : "/coffee",
  output: "export",
  trailingSlash: true,

  // experimental: {
  //   images: true,
  // },
  env: {
    VIDEO_ADDRESS: isDev ? "/coffee_mv.mp4" : "/coffee/coffee_mv.mp4",
    usePathname: process.env.USE_PATHNAME === true,
    GITHUB_ID: "0e93c4ed4d618d45c75b",
    GITHUB_PW: "b403055ef27028fe4fcdb12060543555b4b25454",
    basePath: isDev ? "" : "/coffee",
    MONGODB_URL:
      "mongodb+srv://saysang2212:xfFd2k6qiUvoD8vW@cluster0.dnf1sql.mongodb.net/?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
