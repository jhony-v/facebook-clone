import { useAtomValue } from "jotai/utils";
import { topicsAtom } from "../../../stores/topics.store";
import TopicCard from "../../../components/TopicCard";
import { styled } from "../../../lib/stitches.config";

const TopicListCardGrid = styled("div",{
  display : "grid",
  gridTemplateColumns : "repeat(3,1fr)",
  gap : "20px"
})

const HelpTopicsList = () => {
  const topics = useAtomValue(topicsAtom);
  return (
    <TopicListCardGrid>
      {topics.map((topic, index) => (
        <TopicCard topic={topic} key={index} />
      ))}
    </TopicListCardGrid>
  );
};

export default HelpTopicsList;
