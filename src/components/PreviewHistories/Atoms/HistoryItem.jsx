import React from "react";
import TextLabel from "../../Common/TextLabel";
import Wrapper from "../../Common/Wrapper";
import { StyledAvatarBordered, StyledCardBackgroundImage, StyledCardOverflow } from "./elements";

const HistoryItem = ({ user, image }) => {
  return (
    <StyledCardOverflow withBackground>
        <StyledCardBackgroundImage image={image}>
            <Wrapper p="10px">
                <StyledAvatarBordered src={user.avatar} />
            </Wrapper>
            <Wrapper m="auto 10px 10px" w="80%">
                <TextLabel variant="light" textSize=".9rem">{user.username}</TextLabel>
            </Wrapper>
        </StyledCardBackgroundImage>
    </StyledCardOverflow>
  );
};

export default HistoryItem;
