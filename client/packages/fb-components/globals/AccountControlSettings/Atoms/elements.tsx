import FlexWrapper from "@fb-components/FlexWrapper";
import RowItemSelectable from "@fb-components/RowItemSelectable";
import styled from "styled-components";

export const StyledControlWrapper = styled(FlexWrapper)`
  height: ${(props) => props.theme.layoutSizes.heightNavigator};
  position: fixed;
  right: 0;
  top: 0;
  align-items: center;
  padding-right: 16px;
`;

export const StyledUserAccountButton = styled(RowItemSelectable)`
  border-radius: 20px;
  padding: 4px;
  margin-right: 20px;
`;
