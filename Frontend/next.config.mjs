/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: false,  // Disable the source map - the file structure is not revealed, a good practice
    compiler: {
        styledComponents: true
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    turbopack: {
        rules:  {
            '*.svg': {
              loaders: ['@svgr/webpack'],
              as: '*.js',
            },
          },
    },
    reactStrictMode: false  // Turn off because the world is rendering twice
};

export default nextConfig;
