import RoundButton from "@fb-components/common/RoundButton";
import styled from "styled-components";

export const WrapperModalOptions = styled.div`
  top: 0;
  right: 0;
  margin: 50px;
  position: absolute;
  z-index: 10;
  width: 350px;
`;

export const RoundButtonIcon = styled(RoundButton).attrs({
  dimension: "40px"
})`
  background-color: ${(props) => props.theme.colors.vgBlackAlpha20};
`;
