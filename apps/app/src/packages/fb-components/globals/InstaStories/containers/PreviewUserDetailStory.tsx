import UserDetailStory from "../components/Atoms/UserDetailStory";
import { useInstaStoriesContext } from "../contexts/CTXInstaStories/InstaStoriesContext";

type PreviewUserDetailStoryProps = {
  user: {
    avatar: string;
    fullName: string;
    userId: string;
  };
};
export const PreviewUserDetailStory = ({
  user
}: PreviewUserDetailStoryProps) => {
  const {
    currentStory: { datetime }
  } = useInstaStoriesContext();
  const userDetailStory = { ...user, datetime };
  return <UserDetailStory {...userDetailStory} />;
};

export default PreviewUserDetailStory;
