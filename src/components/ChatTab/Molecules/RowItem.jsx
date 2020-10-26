import React from "react";
import Wrapper from "../../Common/Wrapper";
import Avatar from "../../Common/Avatar";
import RowItemSelectable from "../../Common/RowItemSelectable";

const RowItem = React.memo(({ style, text, image }) => {
  return (
    <Wrapper style={style}>
      <Wrapper m="10px">
        <RowItemSelectable  image={<Avatar src={image} />} text={text} />
      </Wrapper>
    </Wrapper>
  );
});

export default RowItem;
