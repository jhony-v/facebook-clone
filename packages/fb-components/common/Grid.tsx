import styled, { css } from "styled-components";

export type GridTypes = {
  repeatColumns?: number;
  gap?: string;
  sizeColumns ?: (number | string)[];
};

export default styled.div<GridTypes>`
  display: grid;
  ${(props) => props.repeatColumns && css`
      grid-template-columns: repeat(${props.repeatColumns}, 1fr);
  `};
  ${props => props.sizeColumns && css`
    grid-template-columns:${props.sizeColumns.map((e,i) => e + "px").join(" ")};
  `}
  gap: ${(props) => props.gap};
`;

