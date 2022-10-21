import React from "react";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";

type DetailtUserProps = {
  title: string;
  detail: string;
  icon: React.JSXElementConstructor<{ size?: number; color?: string }>;
};
const DetailUser = ({
  title,
  detail,
  icon: IconComponent
}: DetailtUserProps) => (
  <FlexWrapper flexDirection="column" w="100%">
    <TextLabel textSize={300} weight textColor="vgTextBlack">
      {title}
    </TextLabel>
    <Wrapper p="5px 0">
      <FlexWrapper align="center">
        <Wrapper m="0 5px 0 0">
          <TextLabel textSize={200} textColor="vgTextBlackAlpha20">
            {detail}
          </TextLabel>
        </Wrapper>
        <IconComponent size={12} color="gray" />
      </FlexWrapper>
    </Wrapper>
  </FlexWrapper>
);

export default DetailUser;
