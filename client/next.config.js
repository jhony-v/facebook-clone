const withBundleAnalizer = require("@next/bundle-analyzer")({
        enabled : process.env.ANALYZE === "true",
});

const config = withBundleAnalizer({});

module.exports = config;