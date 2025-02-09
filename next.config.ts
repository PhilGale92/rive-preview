import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "build",
  poweredByHeader: false,
  reactStrictMode: true,
  generateBuildId: async () => {
      return new Date().getTime().toString();
  },
  images: { unoptimized: true },
  compiler: {
      reactRemoveProperties: (process.env.NODE_ENV === 'production'),
  },
};

export default nextConfig;
