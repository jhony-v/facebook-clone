import FlexWrapper from "@fb-components/FlexWrapper";
import RoundButton from "@fb-components/RoundButton";
import TextLabel from "@fb-components/TextLabel";
import Wrapper from "@fb-components/Wrapper";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

type HeaderSubItemProps = {
  title: string;
  onBack : () => void;
};
const HeaderSubItem: React.FC<HeaderSubItemProps> = ({ onBack, title, children }) => {
  return (
    <>
    <Wrapper m="0 0 30px 0">
      <FlexWrapper align="center" >
        <RoundButton dimension="45px" onClick={onBack}>
          <BiArrowBack  size="30px" />
        </RoundButton>
        <Wrapper p="0px 0 0px 20px">
            <TextLabel weight textColor="vgTextBlack" textSize={600}>{title}</TextLabel>
        </Wrapper>
      </FlexWrapper>
    </Wrapper>
      {children}
    </>
  );
};

export default HeaderSubItem;
