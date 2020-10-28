import { StyledTabChatFillWrapper, StyledTabChatMainExpanded } from "./elements";

const TabMainExpanded : React.FC = ({ children }) => {
  return (
    <StyledTabChatMainExpanded>
      <StyledTabChatFillWrapper>{children}</StyledTabChatFillWrapper>
    </StyledTabChatMainExpanded>
  );
};

export default TabMainExpanded;
