import FlexWrapper from "@fb-components/common/FlexWrapper";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";

const TextLabelPrimary = ({ text }: { text: string }) => (
  <TextLabel textColor="vgTextPrimary" textSize={300}>
    {text}
  </TextLabel>
);

const HeaderListUsers = () => {
  const titleStories = (
    <TextLabel weight textColor="vgTextBlack" textSize={700}>
      Stories
    </TextLabel>
  );
  const linkStories = (
    <FlexWrapper align="center">
      <Wrapper m="0 10px 0 0">
        <TextLabelPrimary text="Archive" />
      </Wrapper>
      <TextLabelPrimary text="Settings" />
    </FlexWrapper>
  );
  const textYouStory = (
    <Wrapper p="20px 0">
      <TextLabel weight textColor="vgTextBlack">
        Your story
      </TextLabel>
    </Wrapper>
  );

  return (
    <Wrapper p="0 10px">
      <FlexWrapper align="flex-end" justify="space-between">
        {titleStories}
        {linkStories}
      </FlexWrapper>
      {textYouStory}
    </Wrapper>
  );
};

export default HeaderListUsers;
