import React from "react";
import Avatar from "../../Common/Avatar";
import TextLabel from "../../Common/TextLabel";
import Wrapper from "../../Common/Wrapper";
import { StyledCardBackgroundImage, StyledCardOverflow } from "./elements";

const HistoryItem = ({ user, image }) => {
  return (
    <StyledCardOverflow withBackground>
      <StyledCardBackgroundImage image={image}>
        <Wrapper p="10px">
          <Avatar dimension="30px" isFeature src={user.avatar} />
        </Wrapper>
        <Wrapper m="auto 10px 10px" w="90%">
          <TextLabel variant="light" textSize=".9rem">
            {user.username}
          </TextLabel>
        </Wrapper>
      </StyledCardBackgroundImage>
    </StyledCardOverflow>
  );
};

export default HistoryItem;
