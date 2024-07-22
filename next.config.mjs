/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`
            }
        ]
    },
    // async headers() {
    //     return [
    //         {
    //             source: "/api/:path*",
    //             headers: [
    //                 {
    //                     key: "Access-Control-Allow-Origin",
    //                     value: "*", // Set your origin
    //                 },
    //                 {
    //                     key: "Access-Control-Allow-Methods",
    //                     value: "GET, POST, PUT, DELETE, OPTIONS",
    //                 },
    //                 {
    //                     key: "Access-Control-Allow-Headers",
    //                     value: "Content-Type, Authorization",
    //                 },
    //                 {
    //                     key: "Test-Front",
    //                     value: "test",
    //                 },
    //             ],
    //         },
    //     ];
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.devdojo.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.namu.wiki',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'img.stibee.com',
                port: '',
                pathname: '/**',

            }

        ],
    },
};

export default nextConfig;
