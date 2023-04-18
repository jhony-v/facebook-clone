import Grid from "@fb-components/common/Grid";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import CardTopic from "@views/HelpView/components/CardTopic";
import { styled } from "@views/HelpView/config/stitches.config";
import helpStore from "@views/HelpView/store/helpStore";

const TopicsWrapper = styled("div", {
  margin: "auto",
  paddingTop: 100,
  paddingBottom: 100,
  width: "800px",
  maxWidth: "95%"
});

const Input = styled("input", {
  backgroundColor: "$hover-overlay",
  borderRadius: "20px",
  fontSize: "15px",
  marginTop: "10px",
  marginBottom: "10px",
  padding: 25,
  width: "$full",
  display: "block"
});

const HelpTopicsPreview = () => {
  const helpTopicOptionsStore = helpStore.useStoreState(
    (state) => state.topicOptions
  );
  return (
    <TopicsWrapper>
      <Wrapper as="section">
        <TextLabel weight textSize={700} textColor="vgTextBlack">
          How can we help you?
        </TextLabel>
        <Wrapper>
          <Input placeholder="Search help articles..." />
        </Wrapper>
      </Wrapper>
      <Wrapper as="section" m="40px 0">
        <TextLabel weight textSize={700} textColor="vgTextBlack">
          Popular Topics
        </TextLabel>
        <Wrapper m="20px 0">
          <Grid repeatColumns={3} gap="10px">
            {helpTopicOptionsStore.map((topic, index) => (
              <CardTopic key={index} topic={topic} />
            ))}
          </Grid>
        </Wrapper>
      </Wrapper>
    </TopicsWrapper>
  );
};

export default HelpTopicsPreview;
