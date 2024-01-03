import styled from "styled-components";

export default styled.div`
  padding: 10px;
  border-radius: 10px;
  transition: background-color 0.3s;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.vgBlackAlpha12};
  }
`;
