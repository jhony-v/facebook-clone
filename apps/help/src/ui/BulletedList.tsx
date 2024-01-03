import React from "react";
import { styled } from "../lib/stitches.config";

const LiItem = styled("li", {
    paddingBottom : "15px",
})

const OlItem = styled("ol", {
    paddingBottom : "15px",
})

type BulletedListProps = {
  ordered?: React.ReactNode[];
  unrodered?: React.ReactNode[];
};

const BulletedList = (props: BulletedListProps) => {
  const orderedListItems = props.ordered && props.ordered.map(
    (item, index) => <LiItem key={index}>{item}</LiItem>
  );
  const unorderedListItems = props.unrodered && props.unrodered.map(
    (item, index) => <OlItem key={index}>{item}</OlItem>
  );
  return (
    <ul>
      {orderedListItems}
      {unorderedListItems}
    </ul>
  );
};

BulletedList.defaultProps = {
  ordered: [],
  unordered: [],
};

export default BulletedList;
