/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async rewrites() {
    return [
      {
        source: "/Admin",
        destination: "https://icict4sd.vercel.app/Admin",
      },
      {
        source: "/UserMessages",
        destination: "https://icict4sd.vercel.app/UserMessages",
      },
    ];
  },
};

module.exports = nextConfig;
