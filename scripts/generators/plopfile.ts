import { NodePlopAPI } from "plop";
import reactAppGenerator from "./react-app/react-app.generator";
import nextAppGenerator from "./next-app/next-app.generator";
import packageGenerator from "./package/package.generator";

export default function (plop: NodePlopAPI) {
  plop.setWelcomeMessage("Select the type of project to create")
  reactAppGenerator(plop);
  nextAppGenerator(plop);
  packageGenerator(plop);
}
