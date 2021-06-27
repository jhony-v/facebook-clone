import { NodePlopAPI } from "plop";

export default function packageGenerator(plop: NodePlopAPI) {
  plop.setGenerator("package", {
    description: "Create a new package to use in diferents projects",
    prompts: [],
    actions: [],
  });
}
