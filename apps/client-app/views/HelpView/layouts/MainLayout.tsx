import { FC, PropsWithChildren } from "react";
import StitchesLayoutGenerator from "./StitchesLayoutGenerator";

const MainLayout: FC<PropsWithChildren<{}>> = ({ children }) => (
  <StitchesLayoutGenerator>{children}</StitchesLayoutGenerator>
);

export default MainLayout;
