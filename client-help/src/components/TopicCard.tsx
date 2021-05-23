import React from "react";
import { TopicOptionItemType } from "../data/topics.data";
import { styled } from "../lib/stitches.config";

const Card = styled("div", {
  borderRadius: 10,
  backgroundColor: "$hover-overlay",
  display: "flex",
  flexDirection: "column",
  padding: 30,
  cursor: "pointer",
});

type TopicCardProps = {
  topic: TopicOptionItemType;
};

const TopicCard = ({ topic }: TopicCardProps) => {
  return (
    <Card>
      <img src={topic.icon} width="80" height="80" alt={topic.icon} />
    </Card>
  );
};

export default TopicCard;
