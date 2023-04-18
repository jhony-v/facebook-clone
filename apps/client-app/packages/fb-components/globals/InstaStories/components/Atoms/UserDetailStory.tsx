import styled from "styled-components";
import Avatar from "@fb-components/common/Avatar";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import Wrapper from "@fb-components/common/Wrapper";
import { converMeasureCSSToNumber } from "@utils/transforms";
import { memo } from "react";
import TextStory from "./TextStory";
import { InstaStoryPosition } from "../../InstaConfig/config";

const UserDetailStoryWrapper = styled.div`
  position: absolute;
  left: ${InstaStoryPosition};
  top: ${converMeasureCSSToNumber(InstaStoryPosition) * 2}px;
`;

export type UserDetailStoryProps = {
  avatar?: string;
  fullName?: string;
  datetime?: string;
};
const UserDetailStory = ({
  avatar,
  fullName,
  datetime
}: UserDetailStoryProps) => (
  <UserDetailStoryWrapper>
    <FlexWrapper align="center">
      <Wrapper m="0 10px 0 0">
        <Avatar src={avatar} />
      </Wrapper>
      <FlexWrapper align="center">
        <TextStory weight={600}>{fullName}</TextStory>
        <Wrapper m="0 5px">
          <TextStory>{datetime}</TextStory>
        </Wrapper>
      </FlexWrapper>
    </FlexWrapper>
  </UserDetailStoryWrapper>
);

export default memo(UserDetailStory);
