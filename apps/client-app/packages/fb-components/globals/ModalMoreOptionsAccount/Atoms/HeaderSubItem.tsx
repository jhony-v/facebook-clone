import React from "react";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import RoundButton from "@fb-components/common/RoundButton";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import { BiArrowBack } from "react-icons/bi";
import { FCWithChildren } from "@utils/types";

type HeaderSubItemProps = {
  title: string;
  onBack: () => void;
};
const HeaderSubItem: FCWithChildren<HeaderSubItemProps> = ({
  onBack,
  title,
  children
}) => (
  <>
    <Wrapper m="0 0 30px 0">
      <FlexWrapper align="center">
        <RoundButton dimension="45px" onClick={onBack}>
          <BiArrowBack size="30px" />
        </RoundButton>
        <Wrapper p="0px 0 0px 20px">
          <TextLabel weight textColor="vgTextBlack" textSize={600}>
            {title}
          </TextLabel>
        </Wrapper>
      </FlexWrapper>
    </Wrapper>
    {children}
  </>
);

export default HeaderSubItem;
