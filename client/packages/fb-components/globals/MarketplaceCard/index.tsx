import SquareImage from "@fb-components/SquareImage";
import TextLabel from "@fb-components/TextLabel";
import Wrapper from "@fb-components/Wrapper";
import useVisibilityObserver from "@fb-hooks/useVisibilityObserver";
import React, { useEffect, useState } from "react";
import { MarketplaceCardWrapper } from "./Atoms/elements";

type MarketplaceCardProps = {
  image: string;
  price?: string;
  description?: string;
  location?: string;
  onClick  ?: () => void
};

const MarketplaceCard = (props: MarketplaceCardProps) => {
  const { setElement, visibility } = useVisibilityObserver();
  const [ image , setImage ] = useState("");

  useEffect(() => {
    visibility && setImage(props.image); 
  },[visibility])

  return (
    <MarketplaceCardWrapper onClick={props.onClick}>
     <SquareImage data-src={props.image} ref={setElement} {...!!image && {src:image}}  />
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
