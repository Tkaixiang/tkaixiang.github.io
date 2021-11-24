const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  basePath: "",
    assetPrefix: "",
    optimizeImages: false
  // your config for other plugins or the general next.js here...
})
