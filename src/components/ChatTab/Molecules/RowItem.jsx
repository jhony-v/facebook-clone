import React from "react";
import Wrapper from "../../Common/Wrapper";
import Avatar from "../../Common/Avatar";
import TextLabel from "../../Common/TextLabel";
import { StyledRowItem } from "./elements";

const RowItem = React.memo(({ style, text, image }) => {
  return (
    <Wrapper style={style}>
    <StyledRowItem>
      <Wrapper m="0 10px 0 0">
        <Avatar src={image} />
      </Wrapper>
      <TextLabel weight textSize=".9rem">
        {text}
      </TextLabel>
    </StyledRowItem>
    </Wrapper>
  );
});

export default RowItem;
