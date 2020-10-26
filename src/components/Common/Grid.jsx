import styled from "styled-components";

export default styled.div`
    display:grid;
    grid-template-columns:repeat(${props => props.repeatColumns},1fr);
    gap:${props => props.gap};
`   