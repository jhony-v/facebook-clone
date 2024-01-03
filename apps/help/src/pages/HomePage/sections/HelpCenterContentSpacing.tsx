import { FC, PropsWithChildren } from "react";
import WrapperCenterContent from "../../../components/WrapperCenterContent";
import { styled } from "../../../lib/stitches.config";

const Spacing = styled("div", {
  my: "90px"
});

const HelpCenterContentSpacing: FC<PropsWithChildren> = ({ children }) => (
  <Spacing>
    <WrapperCenterContent>{children}</WrapperCenterContent>
  </Spacing>
);

export default HelpCenterContentSpacing;
