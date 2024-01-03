import React from "react";
import { StyledPreviewStoriesWrapper } from "./Atoms/elements";
import HistoryItem from "./Atoms/HistoryItem";

type PreviewStoriesProps = {
  data: any[];
  children: (e: any, i: number) => React.ReactNode;
  userAddController: React.ReactNode;
};
const PreviewStories = ({
  data,
  children,
  userAddController
}: PreviewStoriesProps) => (
  <StyledPreviewStoriesWrapper>
    {userAddController}
    {data.map((e, i) => children(e, i))}
  </StyledPreviewStoriesWrapper>
);

PreviewStories.Item = HistoryItem;

export default PreviewStories;
