import styled from "styled-components";
import defaultTheme from "../../../theme/defaultTheme";
import RaisedButton from "../../Common/RaisedButton";

export const StyledRaisedButton = styled(RaisedButton)`
  width: 100%;
  cursor: pointer;
`;

export const StyledRaisedButtonPlaceholderInput = styled(RaisedButton)`
  border-radius: 30px;
  background-color: ${defaultTheme.colors.primaryLayoutLight};
  width: 100%;
  cursor: pointer;
`;
