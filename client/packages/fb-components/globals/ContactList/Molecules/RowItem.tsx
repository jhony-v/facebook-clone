import React from "react";
import RowItemSelectable from "@fb-components/RowItemSelectable";
import Avatar from "@fb-components/Avatar";
import Wrapper from "@fb-components/Wrapper";

type RowItemProps = {
  style?: React.CSSProperties;
  text ?: string;
  image ?: string;
}
const RowItem = React.memo(({ style, text, image }: RowItemProps) => {
  return (
    <Wrapper style={style}>
      <Wrapper m="10px">
        <RowItemSelectable image={<Avatar src={image} dimension="25px" isOnline />} text={text} />
      </Wrapper>
    </Wrapper>
  );
});

export default RowItem;