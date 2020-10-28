import styled from "styled-components";

export type GridTypes = {
    repeatColumns ?: number;
    gap ?: string;
}

export default styled.div<GridTypes>`
    display:grid;
    grid-template-columns:repeat(${props => props.repeatColumns},1fr);
    gap:${props => props.gap};
`   