import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // <-- enables static export
  images: {
    unoptimized: true,     // <-- needed if you use next/image for static export
  },
  // Optional: any other configs like basePath, trailingSlash, etc.
};

export default nextConfig;
