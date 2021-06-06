/**
 * @type import("@commitlint/types").UserConfig
 */
module.exports = {
  extends: "@commitlint/config-conventional",
  rules: {
    "scope-enum": [
      2,
      "always",
      [
        "global",
        "client-app",
        "client-help",
        "client-live-audio",
        "client-messenger",
        "server-app",
      ],
    ],
    "body-empty": [2, "never"],
    "header-case": "sentence-case",
  },
};
