import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vaibhav Gupta",
    short_name: "Vaibhv19",
    description: "Personal portfolio and technical writing of Vaibhav Gupta — Software Engineer building distributed systems, AI agent platforms, and full-stack applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0d14",
    theme_color: "#0a0d14",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
