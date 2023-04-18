import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import { styled } from "../config/stitches.config";

const Card = styled("div", {
  borderRadius: 10,
  backgroundColor: "$hover-overlay",
  display: "flex",
  flexDirection: "column",
  padding: 30,
  cursor: "pointer"
});

type CardTopicProps = {
  topic: {
    name: string;
    description: string;
    icon: string;
  };
};
const CardTopic = (props: CardTopicProps) => {
  const { topic } = props;
  return (
    <Card>
      <FlexWrapper justify="center">
        <img src={topic.icon} width="80" height="80" alt={topic.icon} />
      </FlexWrapper>
      <Wrapper m="40px 0 10px">
        <TextLabel weight textColor="vgTextBlack">
          {topic.name}
        </TextLabel>
      </Wrapper>
      <TextLabel textSize={300}>{topic.description}</TextLabel>
    </Card>
  );
};

export default CardTopic;
