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
    reactStrictMode: false  // Turn off because the world is rendering twice
};

export default nextConfig;
