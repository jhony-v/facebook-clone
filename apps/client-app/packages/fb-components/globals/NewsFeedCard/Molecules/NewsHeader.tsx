import React from "react";
import Avatar from "@fb-components/common/Avatar";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import Wrapper from "@fb-components/common/Wrapper";
import ButtonMoreAction from "../Atoms/ButtonMoreAction";
import DetailUser from "../Atoms/DetailUser";

type NewsHeaderProps = {
  user: {
    avatar: string;
    name: string;
  };
  detail: {
    text: string;
    icon: React.JSXElementConstructor<{}>;
  };
};
const NewsHeader = ({ user, detail }: NewsHeaderProps) => (
  <Wrapper p="20px 10px 0">
    <FlexWrapper align="center">
      <Wrapper flexNone m="0 10px 0 0">
        <Avatar src={user.avatar} />
      </Wrapper>
      <DetailUser title={user.name} detail={detail.text} icon={detail.icon} />
      <ButtonMoreAction />
    </FlexWrapper>
  </Wrapper>
);

export default NewsHeader;
