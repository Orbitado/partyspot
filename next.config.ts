import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "s3-alpha-sig.figma.com" // Figma S3 domain for images
    ]
  }
};

export default nextConfig;
