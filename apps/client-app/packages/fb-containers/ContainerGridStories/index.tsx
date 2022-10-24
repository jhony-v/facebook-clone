import { SkeletonElementCardGrid } from "@fb-components/globals/LoadersSkeletonElement";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const AsyncStoriesExample = dynamic(
  () => import("@fb-containers/ContainerPreviewUserStories")
);

const ContainerGridStories = () => (
  <Suspense fallback={<SkeletonElementCardGrid repeat={5} />}>
    <AsyncStoriesExample />
  </Suspense>
);

export default ContainerGridStories;
