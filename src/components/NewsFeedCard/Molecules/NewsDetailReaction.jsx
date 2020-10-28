import React from "react";
import FlexWrapper from "src/components/Common/FlexWrapper";
import StringReactions from "src/components/Common/StringReactions";
import TextLabel from "src/components/Common/TextLabel";
import Wrapper from "src/components/Common/Wrapper";

const NewsDetailReaction = ({reactions, totalReactions, textTotalDetail }) => {
  return (
    <Wrapper p="5px 10px">
      <FlexWrapper justify="space-between">
        <FlexWrapper align="center">
          { reactions && <StringReactions reactions={reactions} />}
          <TextLabel variant="smooth" textSize=".9rem">{totalReactions}</TextLabel>
        </FlexWrapper>
        <Wrapper>
        <TextLabel variant="smooth" textSize=".9rem">{textTotalDetail}</TextLabel>
        </Wrapper>
      </FlexWrapper>
    </Wrapper>
  );
};

export default NewsDetailReaction;
