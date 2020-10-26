import React from "react";
import { FiPlus } from "react-icons/fi";
import FlexWrapper from "../../Common/FlexWrapper";
import TextLabel from "../../Common/TextLabel";
import Wrapper from "../../Common/Wrapper";
import {
  StyledCardOverflow,
  StyledUserButtonAdd,
  StyledUserImageAdd,
} from "./elements";

const HistoryUserItem = ({ username, avatar }) => {
  return (
    <StyledCardOverflow>
      <StyledUserImageAdd src={avatar} />
      <FlexWrapper justify="center">
        <StyledUserButtonAdd>
          <FiPlus size={20} />
        </StyledUserButtonAdd>
      </FlexWrapper>
      <Wrapper m="auto 0" w="100%">
        <FlexWrapper justify="center">
          <TextLabel textSize=".8rem" textAlign="center">
            {username}
          </TextLabel>
        </FlexWrapper>
      </Wrapper>
    </StyledCardOverflow>
  );
};

export default HistoryUserItem;
