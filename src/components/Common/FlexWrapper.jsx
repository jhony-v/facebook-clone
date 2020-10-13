import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${ props => props.align};
  justify-content: ${props => props.justify};
`;
