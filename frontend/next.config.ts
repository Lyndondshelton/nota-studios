import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'notastudios-s3-bucket.s3.amazonaws.com',
                pathname: '/media/**'
            },
        ],
    },
};

export default nextConfig;
