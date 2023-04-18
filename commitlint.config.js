/**
 * @type import("@commitlint/types").UserConfig
 */
module.exports = {
  extends: "@commitlint/config-conventional",
  rules: {
    "subject-min-length" : [
      2,
      "always",
    ],
    "scope-enum": [
      2,
      "always",
      [
        "client-app",
        "client-help",
        "client-live-audio",
        "client-auth",
        "client-settings",
        "client-streaming",
        "client-gaming",
        "client-messenger",
        "client-messenger-kids",
        "service-app",
        "themes",
        "ui",
      ],
    ],
  },
};
