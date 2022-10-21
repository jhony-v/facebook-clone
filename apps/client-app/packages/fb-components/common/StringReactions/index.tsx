import React from "react";
import styled from "styled-components";
import Reactions from "../Reactions";
import FlexWrapper from "../FlexWrapper";

type ItemTypes = {
  leftPosition: number;
};
const Item = styled.div<ItemTypes>`
  position: relative;
  left: ${(props) => `${-props.leftPosition * 4}px`};
  border: 2px solid white;
  border-radius: 100%;
`;

const Container = styled(FlexWrapper)`
  display: inline-flex;
`;

export type StringReactionType = {
  reaction: keyof typeof Reactions;
} & React.HTMLAttributes<{}>;

export type StringReactionsProps = {
  reactions?: StringReactionType[];
};

const StringReactions = ({ reactions }: StringReactionsProps) => {
  const transformReactionsToMap = reactions?.map(
    ({ reaction, ...restProps }) => ({
      Component: Reactions[reaction],
      Props: restProps
    })
  );
  return (
    <Container>
      {transformReactionsToMap?.map(({ Component, Props }, i) => (
        <Item key={i} leftPosition={i}>
          <Component {...Props} dimension="20px" />
        </Item>
      ))}
    </Container>
  );
};

export default StringReactions;
