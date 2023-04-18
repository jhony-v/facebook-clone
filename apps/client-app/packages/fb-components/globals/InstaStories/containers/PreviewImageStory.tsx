import { useEffect } from "react";
import OverflowBackgroundImage from "@fb-components/common/OverflowBackgroundImage";
import FooterStory from "../components/Atoms/FooterStory";
import { useInstaStoriesContext } from "../contexts/CTXInstaStories/InstaStoriesContext";
import { InstaStoriesTypes } from "../contexts/CTXInstaStories/InstaStoriesTypes";

type PreviewImageStoryProps = {
  onChangeStory?: (currentStory: InstaStoriesTypes.Story) => void;
};
export const PreviewImageStory = ({
  onChangeStory
}: PreviewImageStoryProps) => {
  const { totalStories, currentStory, currentIndexStory, setLoading } =
    useInstaStoriesContext();
  const arrayStories = [...Array(totalStories)];

  useEffect(() => {
    onChangeStory && onChangeStory(currentStory);
  }, [currentStory]);

  return (
    <>
      {arrayStories.map(
        (_, i) =>
          currentIndexStory === i && (
            <OverflowBackgroundImage
              key={i}
              image={currentStory.image}
              onLoadingStatus={setLoading}
            />
          )
      )}
      <FooterStory text={currentStory.text} />
    </>
  );
};

export default PreviewImageStory;
