import SquareImage from "@fb-components/SquareImage";
import TextLabel from "@fb-components/TextLabel";
import Wrapper from "@fb-components/Wrapper";
import React from "react";
import { MarketplaceCardWrapper } from "./Atoms/elements";

type MarketplaceCardProps = {
  image: string;
  price?: string;
  description?: string;
  location?: string;
  onClick  ?: () => void
};

const MarketplaceCard = (props: MarketplaceCardProps) => {
  return (
    <MarketplaceCardWrapper onClick={props.onClick}>
     <SquareImage src={props.image}/>
      <Wrapper>
        <Wrapper p="10px 0 5px">
          <TextLabel weight textColor="vgTextBlack">{props.price}</TextLabel>
        </Wrapper>
        <Wrapper p="5px 0">
          <TextLabel textSize={400} textColor="vgTextBlack">{props.description}</TextLabel>
        </Wrapper>
        <Wrapper p="5px 0">
          <TextLabel textSize={200}>{props.location}</TextLabel>
        </Wrapper>
      </Wrapper>
    </MarketplaceCardWrapper>
  );
};

export default MarketplaceCard;
