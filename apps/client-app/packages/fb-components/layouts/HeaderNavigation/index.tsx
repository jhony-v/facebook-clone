import { FCWithChildren } from "@utils/types";
import { HeaderWrapper } from "./Atoms/elements";

const HeaderNavigation: FCWithChildren = ({ children }) => (
  <HeaderWrapper>{children}</HeaderWrapper>
);

export default HeaderNavigation;
