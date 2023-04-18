import Card from "@fb-components/common/Card";
import styled, { css } from "styled-components";

export const ButtonFloatingToMove = styled(Card)<{
  position?: "left" | "right";
}>`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  font-size: 1.5em;
  bottom: 0;
  margin: auto;
  ${(props) =>
    props.position === "left" &&
    css`
      left: -20px;
    `}
  ${(props) =>
    props.position === "right" &&
    css`
      right: -20px;
    `}
`;

export const ContainerScrolling = {
  Main: styled.div`
    position: relative;
    display: grid;
  `,
  Scroll: styled.div`
    display: flex;
    overflow-x: hidden;
    > * {
      flex: none;
    }
  `
};
