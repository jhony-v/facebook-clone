/**
 * @type import("@commitlint/types").UserConfig
 */
module.exports = {
  extends: "@commitlint/config-conventional",
  rules: {
    "subject-min-length": [2, "always"],
    "scope-enum": [
      2,
      "always",
      [
        "app",
        "help",
        "auth",
        "settings",
        "streaming",
        "gaming",
        "messenger",
        "contracts",
        "design-system",
        "eslint-config",
        "tsconfig",
        "sapp",
        "sstreaming",
      ]
    ]
  }
};
