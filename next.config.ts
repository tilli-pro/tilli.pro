import type { NextConfig } from "next";
import { withNextHeaders } from "next-color-scheme/headers";

const nextConfig: NextConfig = {
  /* config options here */
  headers: withNextHeaders(),
};

export default nextConfig;
