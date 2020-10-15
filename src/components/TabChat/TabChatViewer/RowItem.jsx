import React from "react";
import styled from "styled-components";
import FlexWrapper from "../../Common/FlexWrapper";
import Wrapper from "../../Common/Wrapper";
import Avatar from "../../Common/Avatar";
import TextLabel from "../../Common/TextLabel";

const StyledRowItem = styled(FlexWrapper).attrs({
  align: "center",
})`
  padding: 10px;
  border-radius: 10px;
  margin: 10px 10px 0px;
  transition: background-color 0.3s;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const RowItem = ({ text, image }) => {
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
};

export default RowItem;
