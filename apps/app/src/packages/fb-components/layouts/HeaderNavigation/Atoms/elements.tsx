import FlexWrapper from "@fb-components/common/FlexWrapper";
import styled from "styled-components";

export const HeaderWrapper = styled(FlexWrapper)`
  background-color: ${(props) => props.theme.colors.vgBlackAlpha00};
  height: ${(props) => props.theme.layoutSizes.heightNavigator};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  justify-content: center;
`;
