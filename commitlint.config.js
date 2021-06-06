/**
 * @type import("@commitlint/types").UserConfig
 */
module.exports = {
  extends: "@commitlint/config-conventional",
  rules: {
    "subject-empty" : [
      2,
      "never"
    ],
    "scope-enum": [
      2,
      "always",
      [
        "client-app",
        "client-help",
        "client-live-audio",
        "client-messenger",
        "server-app",
      ],
    ],
  },
};
