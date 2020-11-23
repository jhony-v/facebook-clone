import OverflowCardStory from "./components/Molecules/OverflowCardStory";
import { Story } from "./hooks/useManagementStories/useManagementStoriesTypes";
import InstaStoriesProvider from "./contexts/CTXInstaStories/InstaStoriesProvider";
import PreviewImageStory from "./containers/PreviewImageStory";
import PreviewLoadingImage from "./containers/PreviewLoadingImage";
import PreviewProgressStories from "./containers/PreviewProgressStories";
import PreviewUserDetailStory from "./containers/PreviewUserDetailStory";

interface InstaStoriesProps {
  user: {
    avatar: string;
    fullName: string;
    userId: string;
  };
  stories: Story[];
  onChangeStory?: (currentStory: Story) => void;
}

const InstaStories = (props: InstaStoriesProps) => {
  const { user, stories, onChangeStory } = props;
  const duration = 5;

  return (
    <InstaStoriesProvider duration={duration} stories={stories}>
      <OverflowCardStory>
        <PreviewImageStory onChangeStory={onChangeStory} />
        <PreviewLoadingImage />
        <PreviewProgressStories />
        <PreviewUserDetailStory user={user} />
      </OverflowCardStory>
    </InstaStoriesProvider>
  );
};

export default InstaStories;
