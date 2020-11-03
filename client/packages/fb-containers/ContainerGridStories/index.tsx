import { SkeletonElementCardGrid } from "@fb-components/LoadersSkeletonElement";
import dynamic from "next/dynamic";

const AsyncStoriesExample = dynamic(() => import("../../../examples/Stories.example"),{
    loading: () => <SkeletonElementCardGrid repeat={5} />,
    ssr: false,
  }
);

const ContainerGridStories = () => {
  return <AsyncStoriesExample />;
};

export default ContainerGridStories;
