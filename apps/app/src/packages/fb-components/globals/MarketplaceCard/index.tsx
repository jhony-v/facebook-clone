import SquareImage from "@fb-components/common/SquareImage";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import useVisibilityObserver from "@fb-hooks/useVisibilityObserver";
import React, { useEffect, useState } from "react";
import { MarketplaceCardWrapper } from "./Atoms/elements";

type MarketplaceCardProps = {
  image: string;
  price?: string;
  description?: string;
  location?: string;
  onClick?: () => void;
};

const MarketplaceCard = ({
  onClick,
  image,
  price,
  description,
  location
}: MarketplaceCardProps) => {
  const { setElement, visibility } = useVisibilityObserver();
  const [processImage, setImage] = useState("");

  useEffect(() => {
    visibility && setImage(image);
  }, [visibility]);

  return (
    <MarketplaceCardWrapper onClick={onClick}>
      <SquareImage
        data-src={image}
        ref={setElement}
        {...(!!processImage && { src: processImage })}
      />
      <Wrapper>
        <Wrapper p="10px 0 5px">
          <TextLabel weight textColor="vgTextBlack">
            {price}
          </TextLabel>
        </Wrapper>
        <Wrapper p="5px 0">
          <TextLabel textSize={400} textColor="vgTextBlack">
            {description}
          </TextLabel>
        </Wrapper>
        <Wrapper p="5px 0">
          <TextLabel textSize={200}>{location}</TextLabel>
        </Wrapper>
      </Wrapper>
    </MarketplaceCardWrapper>
  );
};

export default MarketplaceCard;
