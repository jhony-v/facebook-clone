import { SkeletonElementCardGrid } from "@fb-components/globals/LoadersSkeletonElement";
import dynamic from "next/dynamic";

const AsyncStoriesExample = dynamic(
  () => import("@fb-containers/ContainerPreviewUserStories"),
  {
    loading: () => <SkeletonElementCardGrid repeat={5} />,
    ssr: false
  }
);

const ContainerGridStories = () => <AsyncStoriesExample />;

export default ContainerGridStories;
