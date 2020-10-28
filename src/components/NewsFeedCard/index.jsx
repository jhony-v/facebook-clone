import React from "react";
import { StyledNewsFeedWrapper } from "./Atoms/elements";
import NewsBody from "./Molecules/NewsBody";
import NewsDetailReaction from "./Molecules/NewsDetailReaction";
import NewsHeader from "./Molecules/NewsHeader";
import NewsOptions from "./Molecules/NewsOptions";

const NewsFeedCard = ({ children }) => {
  return (
    <StyledNewsFeedWrapper>
      {children}
      <NewsOptions />
    </StyledNewsFeedWrapper>
  );
};

NewsFeedCard.Header = NewsHeader;
NewsFeedCard.Body = NewsBody;
NewsFeedCard.DetailReaction = NewsDetailReaction;

export default NewsFeedCard;
