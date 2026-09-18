import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* Modern formats cut the ~1 MB source photos to a fraction of the bytes,
       which is what Largest Contentful Paint is measured on. */
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
