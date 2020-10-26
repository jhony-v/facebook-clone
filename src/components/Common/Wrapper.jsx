import styled from "styled-components";

const Wrapper = styled.div`
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  flex:${props => props.flexNone && "none"};
`;

export default Wrapper;
