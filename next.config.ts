import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true, // This allows any external image URL
    }
};

export default nextConfig;