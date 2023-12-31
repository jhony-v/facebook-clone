import styled, { css } from "styled-components";

export type GridTypes = {
  repeatColumns?: number;
  gap?: string;
  sizeColumns?: any[];
};

const getSizeColumns = (props: GridTypes) => {
  const setUnit = (value: number | string) => {
    if (typeof value === "number") return `${value}px`;
    return value;
  };
  return props.sizeColumns?.map((e) => setUnit(e)).join(" ");
};

export default styled.div<GridTypes>`
  display: grid;
  ${(props) =>
    props.repeatColumns &&
    css`
      grid-template-columns: repeat(${props.repeatColumns}, 1fr);
    `};
  ${(props) =>
    props.sizeColumns &&
    css`
      grid-template-columns: ${getSizeColumns(props)};
    `}
  gap: ${(props) => props.gap};
`;
