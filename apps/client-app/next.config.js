const withBundleAnalizer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const config = withBundleAnalizer({
  experimental: {
    forceSwcTransforms: true
  }
});

module.exports = config;
