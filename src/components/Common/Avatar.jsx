import styled from "styled-components";

const defaultSize = "40px";

export default styled.img`
  border-radius: 100%;
  object-fit: cover;
  -webkit-user-drag: none;
  background-color:rgba(0,0,0,.1);
  width: ${(props) => props.sizeImage || defaultSize};
  height: ${(props) => props.sizeImage || defaultSize};
`;
