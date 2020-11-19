import styled from "styled-components";

type SidebarTypes = {
  w?: "default" | "medium";
};

export default styled.div<SidebarTypes>`
  background-color: ${(props) => props.theme.colors.vgBlackAlpha00};
  flex: none;
  display: flex;
  flex-direction:column;
  width: ${(props) =>
    ({
      medium: "430px",
      default: "360px",
    }[props.w || "default"])};
`;
