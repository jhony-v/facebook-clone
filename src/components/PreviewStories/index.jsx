import React from "react";
import { StyledPreviewStoriesWrapper } from "./Atoms/elements";
import HistoryItem from "./Atoms/HistoryItem";

const PreviewStories = ({ data, children, userAddController }) => {
  return (
    <StyledPreviewStoriesWrapper>
      {userAddController}
      {data.map((e, i) => children(e, i))}
    </StyledPreviewStoriesWrapper>
  );
};

PreviewStories.Item = HistoryItem;

export default PreviewStories;
