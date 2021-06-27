import { NodePlopAPI } from "plop";

export default function nextAppGenerator(plop: NodePlopAPI) {
  plop.setGenerator("next-app", {
    description: "Create a next app with SSR",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Type a name for the next app:",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "../../apps/client-{{name}}",
        base: "next-app/templates",
        templateFiles: [
          "next-app/templates/**/*.hbs",
          "next-app/templates/public/favicon.ico",
        ],
      },
    ],
  });
}
