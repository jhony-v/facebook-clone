import { NodePlopAPI } from "plop";

export default function packageGenerator(plop: NodePlopAPI) {
  plop.setGenerator("package", {
    description: "Create a new package to use in diferent projects",
    prompts: [
      {
        type: "list",
        name: "packageType",
        message: "What type of package do you need to use?",
        choices: ["components", "utils", "types"],
      },
      {
        type: "input",
        name: "name",
        message: "Type a name for the new package:",
      },
    ],
    actions(data) {
      let listActions = [];
      if (data?.name && data?.packageType) {
        listActions.push({
          type: "addMany",
          destination: `../../packages/{{name}}/`,
          base: `package/templates/{{packageType}}`,
          templateFiles: `package/templates/{{packageType}}/**/*.hbs`,
        });
      }
      return listActions;
    },
  });
}
