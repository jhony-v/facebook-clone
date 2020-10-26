import React from "react";
import FlexWrapper from "../../Common/FlexWrapper";
import TextLabel from "../../Common/TextLabel";
import Wrapper from "../../Common/Wrapper";

const DetailUser = ({ title, detail, icon: IconComponent }) => {
  return (
    <FlexWrapper fDirection="column" w="100%">
      <TextLabel textSize=".9rem" textColor="">
        {title}
      </TextLabel>
      <Wrapper p="5px 0">
        <FlexWrapper align="center">
            <Wrapper m="0 5px 0 0">
              <TextLabel textSize=".8rem">{detail}</TextLabel>
            </Wrapper>
          <IconComponent size={12} color="gray" />
        </FlexWrapper>
      </Wrapper>
    </FlexWrapper>
  );
};

export default DetailUser;
