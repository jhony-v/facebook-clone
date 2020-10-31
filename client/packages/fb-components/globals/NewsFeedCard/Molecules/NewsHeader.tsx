import Avatar from "@fb-components/Avatar";
import FlexWrapper from "@fb-components/FlexWrapper";
import Wrapper from "@fb-components/Wrapper";
import React from "react";
import ButtonMoreAction from "../Atoms/ButtonMoreAction";
import DetailUser from "../Atoms/DetailUser";

type NewsHeaderProps = {
  user: {
    avatar: string;
    username: string;
  },
  detail: {
    text: string;
    icon: React.JSXElementConstructor<{}>;
  }
}
const NewsHeader = ({ user, detail }: NewsHeaderProps) => {
  return (
    <Wrapper p="20px 10px 0">
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
