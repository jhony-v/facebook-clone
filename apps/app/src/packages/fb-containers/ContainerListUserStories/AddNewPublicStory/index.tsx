import FlexWrapper from "@fb-components/common/FlexWrapper";
import RoundButton from "@fb-components/common/RoundButton";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import { FiPlus } from "react-icons/fi";

const AddNewPublicStory = () => (
  <Wrapper p="10px">
    <FlexWrapper align="center">
      <RoundButton colorIcon="vgPrimary">
        <FiPlus size="20px" />
      </RoundButton>
      <Wrapper p="0 0 0 10px">
        <TextLabel weight block textColor="vgTextBlack">
          Create a story
        </TextLabel>
        <TextLabel block textSize={200}>
          Share a photo or write something
        </TextLabel>
      </Wrapper>
    </FlexWrapper>
  </Wrapper>
);

export default AddNewPublicStory;
