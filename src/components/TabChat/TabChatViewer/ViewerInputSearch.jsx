// @flow
import React from "react";
import styled from "styled-components";
import FlexWrapper from "../../Common/FlexWrapper";
import TextLabel from "../../Common/TextLabel";
import Wrapper from "../../Common/Wrapper";

type ViewerInputSearchProps = {
  onKeyUp: (ev: any) => void
};

const ViewerInputSearch = ({ onKeyUp }: ViewerInputSearchProps) => {
  return (
    <Wrapper p="10px 20px 20px">
      <FlexWrapper centerBetween>
        <TextLabel textSize=".8rem">To:</TextLabel>
        <StyledInputSearch onKeyUp={onKeyUp} autoFocus />
      </FlexWrapper>
    </Wrapper>
  );
};

const StyledInputSearch = styled.input`
  background: none;
  outline: none;
  border-width: 0;
  width: 100%;
  margin-left: 5px;
`;

export default ViewerInputSearch;
