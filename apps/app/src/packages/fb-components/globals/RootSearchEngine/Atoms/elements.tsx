import FlexWrapper from "@fb-components/common/FlexWrapper";
import styled from "styled-components";

export const StyledRootSearchEngine = styled(FlexWrapper)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: ${(props) => props.theme.layoutSizes.heightNavigator};
  align-items: center;
  padding-left: 16px;
`;
