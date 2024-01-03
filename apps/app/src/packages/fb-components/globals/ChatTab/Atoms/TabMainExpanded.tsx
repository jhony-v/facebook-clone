import { FC, PropsWithChildren } from "react";
import {
  StyledTabChatFillWrapper,
  StyledTabChatMainExpanded
} from "./elements";

const TabMainExpanded: FC<PropsWithChildren<{}>> = ({ children }) => (
  <StyledTabChatMainExpanded>
    <StyledTabChatFillWrapper>{children}</StyledTabChatFillWrapper>
  </StyledTabChatMainExpanded>
);

export default TabMainExpanded;
