/** @type {import('next').NextConfig} */

const repository = "https://saysang22.github.io/coffee/";
const isDev = process.env.NODE_ENV === "development";
const nextConfig = {
  basePath: isDev ? "" : "/coffee",
  assetPrefix: isDev ? "" : "/coffee",
  output: "export",
  trailingSlash: true,
  async generateStaticParams() {
    const paths = {
      "/": { page: "/" },
      "/shop": { page: "/shop" },
      "/shop/drink": { page: "/shop/drink" },

      "/shop/drink/brood": { page: "/shop/drink/brood" },
      "/shop/drink/coldBrew": { page: "/shop/drink/coldBrew" },
      "/shop/drink/espresso": { page: "/shop/drink/espresso" },
      "/shop/event": { page: "/shop/event" },
      "/shop/food": { page: "/shop/food" },

      "/shop/food/bread": { page: "/shop/food/bread" },
      "/shop/food/cake": { page: "/shop/food/cake" },
      "/shop/food/sandwich": { page: "/shop/food/sandwich" },
      "/shop/story": { page: "/shop/story" },
    };
    return paths;
  },

  experimental: {
    images: true,
  },
  env: {
    VIDEO_ADDRESS: isDev ? "/coffee_mv.mp4" : "/coffee/coffee_mv.mp4",
    usePathname: process.env.USE_PATHNAME === true,
    GITHUB_ID: "0e93c4ed4d618d45c75b",
    basePath: isDev ? "" : "/coffee",
  },
};

module.exports = nextConfig;
