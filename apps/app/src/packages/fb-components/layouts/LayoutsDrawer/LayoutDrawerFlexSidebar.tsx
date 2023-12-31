import { FCWithChildren } from "@utils/types";
import styled from "styled-components";

type SidebarTypes = {
  w?: "default" | "medium";
};

const SidebarWrapper = styled.div<SidebarTypes>`
  background-color: ${(props) => props.theme.colors.vgBlackAlpha00};
  flex: none;
  display: flex;
  flex-direction: column;
  width: ${(props) =>
    ({
      medium: "380px",
      default: "360px"
    }[props.w || "default"])};
`;

const HeaderWrapper = styled.div`
  height: ${(props) => props.theme.layoutSizes.heightNavigator};
  border-bottom: 1px solid ${(props) => props.theme.colors.vgBlackAlpha20};
  flex: none;
`;

const BodyWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 10px;
  position: relative;
  &::-webkit-scrollbar {
    width: 14px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 14px;
  }
  &:hover {
    &::-webkit-scrollbar {
      background-color: ${(props) => props.theme.colors.vgBlackAlpha12};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors.vgBlackAlpha30};
      border: 3px solid ${(props) => props.theme.colors.vgBlackAlpha12};
    }
  }
`;

const LayoutDrawerFlexSidebar: FCWithChildren<{ w?: "default" | "medium" }> = ({
  children,
  w
}) => (
  <SidebarWrapper w={w}>
    <HeaderWrapper />
    <BodyWrapper>{children}</BodyWrapper>
  </SidebarWrapper>
);

export default LayoutDrawerFlexSidebar;
