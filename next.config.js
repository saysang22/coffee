/** @type {import('next').NextConfig} */

const repository = "https://saysang22.github.io/coffee/";
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./app/image.ts",
  },
};

module.exports = nextConfig;
