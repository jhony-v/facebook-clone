import { FCWithChildren } from "@utils/types";
import StitchesLayoutGenerator from "./StitchesLayoutGenerator";

const MainLayout: FCWithChildren = ({ children }) => (
  <StitchesLayoutGenerator>{children}</StitchesLayoutGenerator>
);

export default MainLayout;
