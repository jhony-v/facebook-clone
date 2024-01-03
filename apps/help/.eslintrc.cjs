module.exports = {
  root: true,
  parserOptions: {
    project: true
  },
  extends: ["@fb/eslint-config/react-vite"],
  overrides: [
    {
      files: ["src/lib/stitches.config.js"],
      rules: {
        "@typescript-eslint/no-unused-vars": "off"
      }
    }
  ]
};
