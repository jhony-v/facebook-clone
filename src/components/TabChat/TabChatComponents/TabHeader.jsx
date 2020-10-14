import React from "react";
import CircleButton from "../../Common/CircleButton";
import FlexWrapper from "../../Common/FlexWrapper";
import TextLabel from "../../Common/TextLabel";
import Wrapper from "../../Common/Wrapper";


const TabHeader = ({ titleHeader, onClose }) => {
  return (
    <Wrapper p="5px 20px">
    <FlexWrapper centerBetween>
      <TextLabel weight>{titleHeader}</TextLabel>
      <CircleButton onClick={onClose}></CircleButton>
    </FlexWrapper>
    </Wrapper>
  );
};

export default TabHeader;
