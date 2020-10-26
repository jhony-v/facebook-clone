import React from "react";
import { StyledPreviewHistoriesWrapper } from "./Atoms/elements";
import HistoryItem from "./Atoms/HistoryItem";

const PreviewHistories = ({ data, children, userAddController }) => {
  return (
    <StyledPreviewHistoriesWrapper>
      {userAddController}
      {data.map((e, i) => children(e, i))}
    </StyledPreviewHistoriesWrapper>
  );
};

PreviewHistories.Item = HistoryItem;

export default PreviewHistories;
