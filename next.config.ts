import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/skills",
        destination: "/technology",
        permanent: true,
      },
      {
        source: "/my-experience-with",
        destination: "/technology",
        permanent: true,
      },
      {
        source: "/my-experience-with/:slug*",
        destination: "/technology/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
