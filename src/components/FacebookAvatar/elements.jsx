import styled from "styled-components";
import defaultTheme from "../../theme/defaultTheme";

const size = 40;

const positionFixedStatic = (() => {
  const px = defaultTheme.height.header.replace("px","");
  return ((px - size) / 2 ) + "px";
})();

export const StyledFacebookAvatar = styled.a`
  background: linear-gradient(15deg,${defaultTheme.colors.primary} 40%, #64b5f6 100%);
  width: ${size}px;
  height: ${size}px;
  border-radius: 100%;
  position: ${(props) => props.isFixed && "fixed"};
  left: ${props => props.leftPosition || "16px"};
  top: ${props => props.topPosition || positionFixedStatic};
  color:white;
  overflow:hidden;
  display:flex;
  justify-content:center;
  align-items:flex-end;
`;
