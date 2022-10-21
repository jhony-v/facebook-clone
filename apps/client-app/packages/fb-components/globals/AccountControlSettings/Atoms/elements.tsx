import FlexWrapper from "@fb-components/common/FlexWrapper";
import RowItemSelectable from "@fb-components/common/RowItemSelectable";
import styled from "styled-components";

export const StyledControlWrapper = styled(FlexWrapper)`
  height: ${(props) => props.theme.layoutSizes.heightNavigator};
  position: fixed;
  right: 0;
  top: 0;
  align-items: center;
  padding-right: 16px;
  z-index: 10;
`;

export const StyledUserAccountButton = styled(RowItemSelectable)`
  border-radius: 20px;
  padding: 4px;
  margin-right: 10px;
`;
