import Spinner from "@fb-components/common/Spinner";
import { useInstaStoriesContext } from "../contexts/CTXInstaStories/InstaStoriesContext";

const PreviewLoadingImage = () => {
  const { loading } = useInstaStoriesContext();
  return loading ? <Spinner /> : null;
};

export default PreviewLoadingImage;
