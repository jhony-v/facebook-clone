import theme from "@theme/index";
import styled from "styled-components";
import { converMeasureCSSToNumber } from "@utils/transforms";

const size = 40;

const positionFixedStatic = (() => {
  const px = converMeasureCSSToNumber(theme.layoutSizes.heightNavigator);
  return `${(px - size) / 2}px`;
})();

export type StyledFacebookAvatarTypes = {
  isFixed?: boolean;
  leftPosition?: string;
  topPosition?: string;
};

export const StyledFacebookAvatar = styled.a<StyledFacebookAvatarTypes>`
  background: linear-gradient(
    15deg,
    ${(props) => props.theme.colors.vgPrimary} 40%,
    #64b5f6 100%
  );
  width: ${size}px;
  height: ${size}px;
  position: ${(props) => props.isFixed && "fixed"};
  left: ${(props) => props.leftPosition || "16px"};
  top: ${(props) => props.topPosition || positionFixedStatic};
  border-radius: 100%;
  color: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 10;
`;
