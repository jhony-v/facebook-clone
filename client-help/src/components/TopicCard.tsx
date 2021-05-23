import { TopicOptionItemType } from "../data/topics.data";
import { styled } from "../lib/stitches.config";
import BaseText from "../ui/BaseText";

const Card = styled("div", {
  borderRadius: 10,
  backgroundColor: "$text200",
  display: "flex",
  flexDirection: "column",
  padding: 30,
  cursor: "pointer",
});

const WrapperAlignment = styled("div",{
  variants : {
    variant : {
      image : {
        alignment : "center",
        marginBottom : "20px"
      },
    },
    mb : {
      true : {
        marginBottom : "10px"        
      }
    } 
  }
})

type TopicCardProps = {
  topic: TopicOptionItemType;
  direction ?: "col" | "row"
};

const TopicCard = ({ topic }: TopicCardProps) => {
  return (
    <Card>
      <WrapperAlignment variant="image">
        <img src={topic.icon} width="80" height="80" alt={topic.icon} />
      </WrapperAlignment>
      <WrapperAlignment mb>
        <BaseText weight>{topic.name}</BaseText>
      </WrapperAlignment>
      <BaseText color="secondary" size="small">{topic.description}</BaseText>
    </Card>
  );
};

TopicCard.defaultProps = {
  direction : "col"
}

export default TopicCard;
