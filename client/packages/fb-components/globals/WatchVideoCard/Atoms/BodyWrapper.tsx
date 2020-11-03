import TextLabel from "@fb-components/TextLabel";
import Wrapper from "@fb-components/Wrapper";
import React from "react";

type BodyWrapperProps = {
  text?: string;
  video?: string;
};
const BodyWrapper = ({ text, video }: BodyWrapperProps) => {
  return (
    <Wrapper p="20px 0">
      <Wrapper p="10px 10px 20px">
        <TextLabel textColor="vgTextBlack" weight>{text}</TextLabel>
      </Wrapper>
      <Wrapper>
        <video src={video} controls muted style={{ width: "100%", height: "340px", objectFit: "cover" }}
        />
      </Wrapper>
    </Wrapper>
  );
};

export default BodyWrapper;
