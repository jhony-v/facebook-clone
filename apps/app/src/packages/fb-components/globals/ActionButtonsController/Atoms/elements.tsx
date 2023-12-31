import styled from "styled-components";
import RaisedButton from "@fb-components/common/RaisedButton";

export const StyledRaisedButton = styled(RaisedButton)`
  width: 100%;
  cursor: pointer;
`;

export const StyledRaisedButtonPlaceholderInput = styled(RaisedButton)`
  background-color: ${(props) => props.theme.colors.vgBlackAlpha10};
  border-radius: 30px;
  width: 100%;
  cursor: pointer;
`;
