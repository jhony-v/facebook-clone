import styled from "styled-components";

const defaultSize = "40px";

export default styled.img`
  border-radius: 100%;
  object-fit: cover;
  -webkit-user-drag:none;
  width: ${(props) => props.sizeImage || defaultSize};
  height: ${(props) => props.sizeImage || defaultSize};
`;
