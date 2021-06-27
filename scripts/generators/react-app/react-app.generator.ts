import { NodePlopAPI } from "plop";

export default function reactAppGenerator(plop: NodePlopAPI) {
  plop.setGenerator("react-app", {
    description: "Create a new react app",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Type a name for the react project:",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "../../apps/client-{{name}}/",
        base: "react-app/templates",
        templateFiles: [
          "react-app/templates/**/*.hbs",
          "react-app/templates/public/favicon.ico",
        ],
      },
    ],
  });
}
