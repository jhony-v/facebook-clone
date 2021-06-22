const path = require("path");

module.exports = ({ config }) => {
  config.resolve.alias["@fb-components"] = path.resolve(__dirname, "../packages/fb-components/");
  config.resolve.alias["@fb-contexts"] = path.resolve(__dirname, "../packages/fb-contexts/");
  config.resolve.alias["@fb-containers"] = path.resolve(__dirname, "../packages/fb-containers/");
  config.resolve.alias["@fb-hooks"] = path.resolve(__dirname, "../packages/fb-hooks/");
  config.resolve.alias["@fb-features-recoil"] = path.resolve(__dirname, "../packages/fb-features-recoil/");
  config.resolve.alias["@fb-services"] = path.resolve(__dirname, "../packages/fb-services/");
  config.resolve.alias["@mocks"] = path.resolve(__dirname, "../mocks/");
  config.resolve.alias["@views"] = path.resolve(__dirname, "../views/");
  config.resolve.alias["@utils"] = path.resolve(__dirname, "../utils/");
  config.resolve.alias["@theme"] = path.resolve(__dirname, "../theme/");
  config.resolve.alias["@config"] = path.resolve(__dirname, "../config/");
  return config;
};
