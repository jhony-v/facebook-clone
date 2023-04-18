import styled from "styled-components";
import FlexWrapper from "@fb-components/common/FlexWrapper";

export const StyledListContainer = styled(FlexWrapper)`
  width: ${(props) => props.w || props.theme.layoutSizes.widthRightRail};
  height: ${(props) => props.h || "100%"};
  flex-direction: column;
`;
