import TimerStatusProgressStory from "../components/Molecules/TimerStatusProgressStory";
import { useInstaStoriesContext } from "../contexts/CTXInstaStories/InstaStoriesContext";

const PreviewProgressStories = () => {
  const { totalStories, playing, currentIndexStory, duration } =
    useInstaStoriesContext();
  return (
    <TimerStatusProgressStory
      totalStories={totalStories}
      duration={duration}
      playing={playing}
      currentIndexStory={currentIndexStory}
    />
  );
};

export default PreviewProgressStories;
