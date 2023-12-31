import styled from "styled-components";

export default styled.div<{ compact?: boolean }>`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: stretch;
  height: ${(props) => props.theme.layoutSizes.heightMainDrawer};
  width: ${(props) => props.theme.layoutSizes.widthLeftRail};
  background-color: ${(props) =>
    props.compact && props.theme.colors.vgBlackAlpha00};
`;
