const path = require("path");
const fs = require("fs");
const directories = fs.readdirSync("packages/fb-components");

module.exports = ({ config }) => {
    // not working
    config.resolve.alias["@fb-components"] = [
        path.resolve( __dirname,"../packages/fb-components/application"),
        path.resolve( __dirname,"../packages/fb-components/common")
    ].join(":");
    config.resolve.alias["@utils"] = path.resolve(__dirname,"../utils/");
    config.resolve.alias["@theme"] = path.resolve(__dirname,"../theme/");
	return config;
};