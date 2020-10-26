import styled from "styled-components";
import defaultTheme from "../../../theme/defaultTheme";
import FlexWrapper from "../../Common/FlexWrapper";

export const NotificationPoint = styled.div`
  background-color: ${defaultTheme.colors.danger};
  padding: 5px;
  border-radius: 10px;
`;

export const HeaderWrapper = styled(FlexWrapper).attrs({
  
})`
  background-color: ${defaultTheme.colors.primaryLayout};
  height:${defaultTheme.height.header};
  box-shadow: 0 5px 10px rgba(0,0,0,.05);
  position: fixed;
  width:100%;
  top:0;
  left:0;
`;
