import styled from "styled-components";

type SquareImageTypes = {
  w?: string;
  h?: string;
};
export default styled.img<SquareImageTypes>`
  height: ${(props) => props.h || "250px"};
  width: ${(props) => props.w || "100%"};
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;
