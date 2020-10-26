import styled from "styled-components";

const Wrapper = styled.div`
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
`;

export default Wrapper;
