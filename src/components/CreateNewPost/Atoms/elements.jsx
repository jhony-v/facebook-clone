import styled from "styled-components";
import defaultTheme from "../../../theme/defaultTheme";
import FlexWrapper from "../../Common/FlexWrapper";
import RaisedButton from "../../Common/RaisedButton";

export const StyledCreatePostWrapper = styled(FlexWrapper)`
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  flex-direction: column;
`;

export const StyledRaisedButton = styled(RaisedButton)`
  width: 100%;
  cursor: pointer;
`;

export const StyledButtonPlaceholderInput = styled(RaisedButton)`
  border-radius: 30px;
  margin-left: 20px;
  background-color: ${defaultTheme.colors.primaryLayoutLight};
  width: 100%;
  cursor: pointer;
`;

export const StyledActionInputWrapper = styled(FlexWrapper)`
  border-bottom: 1px solid ${defaultTheme.colors.primaryLayoutLight};
  padding-bottom: 20px;
  margin-bottom: 20px;
`;
