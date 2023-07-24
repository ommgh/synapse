/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "blush.design",
            },
        ],
    },
}

module.exports = nextConfig
