import React from "react";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import ScrollingContainerHorizontal from "./Molecules/ScrollingContainerHorizontal";

type ScrollingSliderProps = {
  title?: string;
};
const ScrollingSlider: React.FC<ScrollingSliderProps> = (props) => {
  const { title, children } = props;
  return (
    <Wrapper m="15px 0">
      {title && (
        <FlexWrapper align="center" justify="space-between">
          <TextLabel weight textColor="vgTextBlack" textSize={700}>
            {title}
          </TextLabel>
          <TextLabel textColor="vgTextPrimary">See all</TextLabel>
        </FlexWrapper>
      )}
      <Wrapper p="20px 0">
        <ScrollingContainerHorizontal>{children}</ScrollingContainerHorizontal>
      </Wrapper>
    </Wrapper>
  );
};

export default ScrollingSlider;
