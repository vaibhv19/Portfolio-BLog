import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/skills",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/my-experience-with",
        destination: "/posts",
        permanent: true,
      },
      {
        source: "/my-experience-with/:slug*",
        destination: "/posts",
        permanent: true,
      },
      {
        source: "/technology",
        destination: "/posts",
        permanent: true,
      },
      {
        source: "/technology/:slug*",
        destination: "/posts",
        permanent: true,
      },
      {
        source: "/writing",
        destination: "/posts",
        permanent: true,
      },
      {
        source: "/writing/:slug*",
        destination: "/posts/:slug*",
        permanent: true,
      },
      {
        source: "/life",
        destination: "https://life.vaibhv19.dev",
        permanent: true,
      },
      {
        source: "/life/:path*",
        destination: "https://life.vaibhv19.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
