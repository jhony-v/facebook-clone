import styled from "styled-components";

export default styled.div`
  background-color: ${(props) => props.theme.colors.vgDanger};
  font-size: ${({ theme }) => theme.fontSizes[100]};
  color: white;
  padding: 4px 6px;
  text-align: center;
  display: inline-block;
  border-radius: 15px;
`;
