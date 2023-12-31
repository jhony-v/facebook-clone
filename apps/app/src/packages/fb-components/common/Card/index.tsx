import styled, { css } from "styled-components";

const setShadow = (validate, shadow) =>
  validate &&
  css`
    box-shadow: ${shadow};
  `;

type CardTypes = {
  variant?: "compact" | "thin";
};

export default styled.div<CardTypes>`
  background-color: ${(props) => props.theme.colors.vgBlackAlpha00};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  ${(props) =>
    setShadow(props.variant === "compact", "0 1px 2px rgba(0,0,0,.1)")}
  ${(props) => setShadow(props.variant === "thin", "0 5px 10px rgba(0,0,0,.1)")}
    border-radius:10px;
`;
