/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: false,  // Disable the source map - the file structure is not revealed, a good practice
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },
    images: {
        qualities: [60, 75],  // 75 is the default; 60 is used for the faded hero background
    },
    reactStrictMode: true,  // Dev-only: double-runs effects to catch missing cleanups
    experimental: {
        agentUpgrade: 'security',  // Agent-driven upgrades stay on security releases
    },
    async headers() {
        return [
            {
                // Cache project preview videos for 1 week; rename the file when replacing a video
                source: '/assets/projects/videos/:path*',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=604800' },
                ],
            },
        ];
    },
};

export default nextConfig;
