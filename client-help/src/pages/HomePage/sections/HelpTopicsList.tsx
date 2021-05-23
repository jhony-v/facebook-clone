import { useAtomValue } from "jotai/utils";
import { topicsAtom } from "../../../stores/topics.store";
import TopicCard from "../../../components/TopicCard";

const HelpTopicsList = () => {
  const topics = useAtomValue(topicsAtom);
  return (
    <div>
      {topics.map((topic, index) => (
        <TopicCard topic={topic} key={index} />
      ))}
    </div>
  );
};

export default HelpTopicsList;
