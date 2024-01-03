import styled from "styled-components";

export default styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: stretch;
  height: ${(props) => props.theme.layoutSizes.heightMainDrawer};
  width: ${(props) => props.theme.layoutSizes.widthRightRail};
`;
