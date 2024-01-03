const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint:recommended", "prettier", "eslint-config-turbo"],
  globals: {
    React: true,
    JSX: true
  },
  env: {
    node: true
  },
  settings: {
    "import/resolver": {
      typescript: {
        project
      }
    }
  },
  rules: {
    "@typescript-eslint/ban-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off"
  },
  ignorePatterns: [".*.js", "node_modules/", "dist/"]
};
