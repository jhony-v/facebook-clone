import styled from "styled-components";
import RaisedButton from "@fb-components/common/RaisedButton";

export const RaisedButtonMoreOptions = styled(RaisedButton)`
  background-color: ${(props) => props.theme.colors.vgBlackAlpha12};
  font-size: ${(props) => props.theme.fontSizes[300]};
  font-weight: bold;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: 10px;
`;
