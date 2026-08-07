import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'notastudios-s3-bucket.s3.amazonaws.com',
                pathname: '/media/**',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'imgproxy.fourthwall.dev',
                pathname: '/**',
                port: '',
            }
        ],
    },
};

export default nextConfig;
