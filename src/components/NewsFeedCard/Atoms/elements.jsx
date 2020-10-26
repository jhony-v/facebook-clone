import styled from "styled-components";
import defaultTheme from "../../../theme/defaultTheme";
import FlexWrapper from "../../Common/FlexWrapper";

export const StyledNewsFeedWrapper = styled(FlexWrapper)`
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  flex-direction: column;
  background-color: ${defaultTheme.colors.primaryLayout};
`;


export const StyledNewsMainImage = styled.img`
  display: block;
  height:280px;
  width:100%;
`