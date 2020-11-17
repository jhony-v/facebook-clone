import FlexWrapper from "@fb-components/common/FlexWrapper";
import RoundButton from "@fb-components/common/RoundButton";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import { FiPlus } from "react-icons/fi";

const AddNewPublicStory = () => {
  return (
    <Wrapper p="10px 16px">
      <FlexWrapper align="center" justify="space-between">
        <TextLabel weight textColor="vgTextBlack" textSize={700}>Stories</TextLabel>
        <Wrapper>
          <TextLabel textColor="vgTextPrimary">Settings</TextLabel>
        </Wrapper>
      </FlexWrapper>
      <Wrapper p="20px 0">
        <TextLabel weight textColor="vgTextBlack">Your story</TextLabel>
      </Wrapper>
      <Wrapper>
        <FlexWrapper align="center">
          <RoundButton colorIcon="vgPrimary">
            <FiPlus size="20px" />
          </RoundButton>
          <Wrapper p="0 0 0 10px">
            <TextLabel weight block textColor="vgTextBlack">Create a story</TextLabel>
            <TextLabel block textSize={200}>Share a photo or write something</TextLabel>
          </Wrapper>
        </FlexWrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default AddNewPublicStory;
