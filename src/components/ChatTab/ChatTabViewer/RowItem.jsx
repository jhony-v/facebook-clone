import React from "react";
import Wrapper from "../../Common/Wrapper";
import Avatar from "../../Common/Avatar";
import TextLabel from "../../Common/TextLabel";
import { StyledRowItem } from "./elements";

type RowItemProps = {
  text? : string,
  image? : string
};

const RowItem = React.memo(({ text, image } : RowItemProps) => {
  return (
    <StyledRowItem>
      <Wrapper m="0 10px 0 0">
        <Avatar src={image} />
      </Wrapper>
      <TextLabel weight textSize=".9rem">
        {text}
      </TextLabel>
    </StyledRowItem>
  );
});

export default RowItem;
