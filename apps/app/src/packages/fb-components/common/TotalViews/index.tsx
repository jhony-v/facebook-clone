import styled from "styled-components";
import { BsEyeFill } from "react-icons/bs";
import Wrapper from "../Wrapper";

const StyledTotalViewsWrapper = styled.div`
  font-size: ${(props) => props.theme.fontSizes[200]};
  padding: 4px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  display: inline-flex;
  align-items: center;
`;

type TotalViewsProps = {
  total?: number;
};
const TotalViews = ({ total }: TotalViewsProps) => (
  <StyledTotalViewsWrapper>
    <BsEyeFill color="white" />
    <Wrapper m="0 0 0 5px">{total}</Wrapper>
  </StyledTotalViewsWrapper>
);

TotalViews.defaultProps = {
  total: 0
};
export default TotalViews;
