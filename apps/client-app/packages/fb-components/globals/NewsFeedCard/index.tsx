import React from "react";
import { StyledNewsFeedWrapper } from "./Atoms/elements";
import NewsBody from "./Molecules/NewsBody";
import NewsDetailReaction from "./Molecules/NewsDetailReaction";
import NewsHeader from "./Molecules/NewsHeader";
import NewsOptions from "./Molecules/NewsOptions";

type NewsFeedCardProps = {
  children: React.ReactNode;
};
const NewsFeedCard = ({ children }: NewsFeedCardProps) => (
  <StyledNewsFeedWrapper>{children}</StyledNewsFeedWrapper>
);

NewsFeedCard.Header = NewsHeader;
NewsFeedCard.Body = NewsBody;
NewsFeedCard.DetailReaction = NewsDetailReaction;
NewsFeedCard.Options = NewsOptions;

export default NewsFeedCard;
