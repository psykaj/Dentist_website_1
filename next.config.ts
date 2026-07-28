import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(), // Prevent Turbopack from scanning up to the home directory lockfile
  }
};

export default nextConfig;
