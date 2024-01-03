import { SkeletonElementCardGrid } from "@fb-components/globals/LoadersSkeletonElement";
import dynamic from "next/dynamic";

const AsyncStoriesExample = dynamic(
  () => import("@fb-containers/ContainerPreviewUserStories"),
  {
    ssr: false,
    loading: () => <SkeletonElementCardGrid repeat={5} />
  }
);

const ContainerGridStories = () => (
    <AsyncStoriesExample />
);

export default ContainerGridStories;
