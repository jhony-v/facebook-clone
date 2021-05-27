import React from "react";
import { styled } from "../lib/stitches.config";

const LiItem = styled("li",{
    paddingBottom : "15px",
})

const OlItem = styled("ol",{
    paddingBottom : "15px",
})

type BulletedListProps = {
  ordered?: React.ReactNode[];
  unrodered?: React.ReactNode[];
};

const BulletedList = (props: BulletedListProps) => {
  const orderedListItems = props.ordered && props.ordered.map((item) => <LiItem>{item}</LiItem>);
  const unorderedListItems = props.unrodered && props.unrodered.map((item) => <OlItem>{item}</OlItem>);
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
