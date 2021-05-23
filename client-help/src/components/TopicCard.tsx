import { TopicOptionItemType } from "../data/topics.data";
import { styled } from "../lib/stitches.config";
import BaseText from "../ui/BaseText";
import { BsArrowRight } from "react-icons/bs"
import React from "react";
import { navigate } from "@reach/router";

const WrapperAlignmentImage = styled("div", {
  boxSizing: "border-box",
});

const WrapperAlignmentText = styled("div", {
  [`& ${BaseText}:first-child`] : {
    marginBottom : "8px"
  }
});

const Image = styled("img",{
  width : "80px",
  height : "80px"
})

const ArrowRight = styled(BsArrowRight,{
  marginLeft : "auto",
  color : "$text500"
}) 

const Card = styled("div", {
  borderRadius: 10,
  backgroundColor: "$text200",
  display: "flex",
  cursor: "pointer",
  "&:hover" : {
    backgroundColor : "$text300"
  },
  variants: {
    direction: {
      col: {
        flexDirection: "column",
        padding: "50px 30px",
        [`& ${WrapperAlignmentImage}`]: {
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
        },
      },
      row: {
        flexDirection: "row",
        alignItems : "center",
        padding: "30px",
        [`& ${WrapperAlignmentText}`] : {
          marginLeft : "10px"
        }
      },
    },
  },
});

const DIRECTION = {
  ROW : "row",
  COL : "col"
};

type TopicCardProps = {
  topic: TopicOptionItemType;
  direction?: "row" | "col";
  to ?: string;
  onClick ?: React.MouseEvent<HTMLDivElement>,
};

const TopicCard = ({ topic, direction, onClick,to  }: TopicCardProps) => {
  const isRow = direction === DIRECTION.ROW;

  const handlerOnClick = (ev : React.MouseEvent<HTMLDivElement>) => {
    if(to) {
      navigate(to);
    }
    else {
      // @ts-ignore
     onClick && onClick(ev);
    }
  }
  return (
    <Card direction={direction} onClick={handlerOnClick}>
      <WrapperAlignmentImage>
        <Image src={topic.icon} alt={topic.icon} />
      </WrapperAlignmentImage>
      <WrapperAlignmentText>
        <BaseText weight>{topic.name}</BaseText>
        <BaseText color="secondary" size="base">
          {topic.description}
        </BaseText>
      </WrapperAlignmentText>
      {isRow && (
        <ArrowRight size={26} />
      )}
    </Card>
  );
};

TopicCard.defaultProps = {
  direction: "col",
};

export default TopicCard;
