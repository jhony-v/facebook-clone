import styled from "styled-components";
import FlexWrapper from "./FlexWrapper";
import { BsEyeFill } from "react-icons/bs";
import Wrapper from "./Wrapper";

const StyledTotalViewsWrapper = styled(FlexWrapper)`
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  align-items: center;
`;

type TotalViewsProps = {
  total?: number;
};
const TotalViews = ({ total }: TotalViewsProps) => {
  return (
    <StyledTotalViewsWrapper>
      <Wrapper m="0 0 10px 0">
        <BsEyeFill color="white" />
      </Wrapper>
      {total}
    </StyledTotalViewsWrapper>
  );
};

TotalViews.defaultProps = {
  total: 0,
};
export default TotalViews;
