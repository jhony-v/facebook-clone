const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss"
  ],
  webpackFinal: async (config,) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader',{
        loader : "sass-resources-loader",
        options: {
          resources: '../themes/common.theme.scss'
        },
      }], 
      include: path.resolve(__dirname, '../src'),
    })
    return config;   
  }
}