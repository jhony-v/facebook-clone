import React from "react";
import Avatar from "../../Common/Avatar";
import FlexWrapper from "../../Common/FlexWrapper";
import Wrapper from "../../Common/Wrapper";
import ButtonMoreAction from "../Atoms/ButtonMoreAction";
import DetailUser from "../Atoms/DetailUser";

const NewsHeader = ({ user, detail }) => {
  return (
    <Wrapper p="5px 10px">
      <FlexWrapper align="center">
        <Wrapper flexNone m="0 5px 0 0">
          <Avatar src={user.avatar} />
        </Wrapper>
        <DetailUser title={user.username} detail={detail.text} icon={detail.icon} />
        <ButtonMoreAction/>
      </FlexWrapper>
    </Wrapper>
  );
};

export default NewsHeader;
