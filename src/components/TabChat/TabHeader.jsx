import React from "react";
import CircleButton from "../Common/CircleButton";
import FlexWrapper from "../Common/FlexWrapper";
import TextLabel from "../Common/TextLabel";

const TabHeader = ({ titleHeader, onClose }) => {
  return (
    <FlexWrapper align="center" justify="space-between">
      <TextLabel>{titleHeader}</TextLabel>
      <CircleButton onClick={onClose}></CircleButton>
    </FlexWrapper>
  );
};

export default TabHeader;
