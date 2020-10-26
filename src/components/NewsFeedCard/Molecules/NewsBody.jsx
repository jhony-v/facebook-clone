import React from "react";
import TextLabel from "../../Common/TextLabel";
import Wrapper from "../../Common/Wrapper";
import { StyledNewsMainImage } from "../Atoms/elements";

const NewsBody = ({ text, image }) => {
  return (
    <Wrapper p="20px 0">
      <Wrapper p="0 10px 10px">
        <TextLabel textSize=".9rem">{text}</TextLabel>
      </Wrapper>
      <StyledNewsMainImage src={image} />
    </Wrapper>
  );
};

export default NewsBody;
