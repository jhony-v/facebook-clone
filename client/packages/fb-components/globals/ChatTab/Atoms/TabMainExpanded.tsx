import { StyledTabChatFillWrapper, StyledTabChatMainExpanded } from './elements';

const TabMainExpanded : React.FC = ({ children }) => (
  <StyledTabChatMainExpanded>
    <StyledTabChatFillWrapper>{children}</StyledTabChatFillWrapper>
  </StyledTabChatMainExpanded>
);

export default TabMainExpanded;
