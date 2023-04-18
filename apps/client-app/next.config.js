const withBundleAnalizer = require("@next/bundle-analyzer")({
  enabled: JSON.parse(process.env.ANALYZE || false)
});

const config = withBundleAnalizer({
  experimental: {
    forceSwcTransforms: true
  }
});

module.exports = config;
