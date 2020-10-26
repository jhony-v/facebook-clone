import React from "react";
import CircleButton from "../../Common/RoundButton";
import FlexWrapper from "../../Common/FlexWrapper";
import TextLabel from "../../Common/TextLabel";
import Wrapper from "../../Common/Wrapper";
import { VscClose } from "react-icons/vsc";

const TabHeader = ({ titleHeader, onClose }) => {
  return (
    <Wrapper p="10px 20px 5px">
      <FlexWrapper centerBetween>
        <TextLabel weight data-testid="title-header">{titleHeader}</TextLabel>
        <CircleButton onClick={onClose} colorIcon="primary">
          <VscClose size={30} />
        </CircleButton>
      </FlexWrapper>
    </Wrapper>
  );
};

export default TabHeader;
