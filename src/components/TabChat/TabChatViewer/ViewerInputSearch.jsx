import React from "react";
import styled from "styled-components";
import FlexWrapper from "../../Common/FlexWrapper";
import TextLabel from "../../Common/TextLabel";
import Wrapper from "../../Common/Wrapper";

const StyledInputSearch = styled.input`
  background: none;
  outline: none;
  border-width: 0;
  width: 100%;
  margin-left: 5px;
`;

const ViewerInputSearch = () => {
  return (
    <Wrapper p="10px 20px 20px">
      <FlexWrapper centerBetween>
        <TextLabel textSize=".8rem">To:</TextLabel>
        <StyledInputSearch  autoFocus />
      </FlexWrapper>
    </Wrapper>
  );
};

export default ViewerInputSearch;
