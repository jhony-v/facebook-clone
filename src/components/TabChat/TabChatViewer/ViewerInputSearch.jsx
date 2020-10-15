// @flow
import React from "react";
import FlexWrapper from "../../Common/FlexWrapper";
import TextLabel from "../../Common/TextLabel";
import Wrapper from "../../Common/Wrapper";
import { StyledInputSearch } from "./elements";

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


export default ViewerInputSearch;
