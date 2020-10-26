import styled, { css } from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  flex-direction: ${(props) => props.fDirection};
  align-items: ${ props => props.align};
  justify-content: ${props => props.justify};

  ${props => props.centerBetween && css`
  align-items: center;
  justify-content: space-between;  
  `}
`;


export default FlexWrapper;