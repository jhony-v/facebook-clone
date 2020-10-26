import React from "react";
import Avatar from "../../Common/Avatar";
import RowItemSelectable from "../../Common/RowItemSelectable";
import Wrapper from "../../Common/Wrapper";

const RowItem = ({ text, image, ...restProps }) => {
  return (
    <Wrapper p="5px 10px" {...restProps}>
      <RowItemSelectable
        image={<Avatar src={image} dimension="32px" />}
        text={text}
      />
    </Wrapper>
  );
};

export default RowItem;
