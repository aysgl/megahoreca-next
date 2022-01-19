const withImages = require("next-images");
module.exports = withImages({
    reactStrictMode: true,
    experimental: {
        reactRefresh: true
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['picsum.photos']
    }
});
