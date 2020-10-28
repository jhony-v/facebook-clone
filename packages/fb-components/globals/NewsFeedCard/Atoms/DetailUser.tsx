import React from "react";
import FlexWrapper from "@fb-components/FlexWrapper";
import TextLabel from "@fb-components/TextLabel";
import Wrapper from "@fb-components/Wrapper";

type DetailtUserProps = { 
  title: string; 
  detail: string;
  icon: React.JSXElementConstructor<{size?:number,color?:string}>; 
};
const DetailUser = ({ title, detail, icon: IconComponent }: DetailtUserProps) => {
  return (
    <FlexWrapper flexDirection="column" w="100%">
      <TextLabel textSize={300} textColor="vgTextBlack">
        {title}
      </TextLabel>
      <Wrapper p="5px 0">
        <FlexWrapper align="center">
            <Wrapper m="0 5px 0 0">
              <TextLabel textSize={100}>{detail}</TextLabel>
            </Wrapper>
          <IconComponent size={12} color="gray" />
        </FlexWrapper>
      </Wrapper>
    </FlexWrapper>
  );
};

export default DetailUser;
