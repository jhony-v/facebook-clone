import styled from "styled-components";

export default styled.div`
  background-color: ${(props) => props.theme.colors.vgDanger};
  font-size: ${({ theme }) => theme.fontSizes[100]};
  color: white;
  width: 1.3rem;
  height: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  border-radius: 15px;
`;
