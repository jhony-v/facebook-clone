import React from "react";
import styled from "styled-components";
import Reactions from "./Reactions";
import FlexWrapper from "./FlexWrapper";

type ItemTypes = {
  leftPosition : number
}
const Item = styled.div<ItemTypes>`
  position: relative;
  left: ${(props) => -props.leftPosition * 4 + "px"};
  border:2px solid white;
  border-radius:100%;
`;

const Container = styled(FlexWrapper)`
    display:inline-flex;
`

export type ReactionsType = keyof typeof Reactions;
export type StringReactionsProps = {
  reactions : ReactionsType[]
}

const StringReactions = ({ reactions } : StringReactionsProps) => {
  const transformReactionsToMap = reactions.map((e, i) => ({
    Component: Reactions[e],
  }));
  return (
    <Container>
      {transformReactionsToMap.map((item, i) => (
        <Item key={i} leftPosition={i}>
          <item.Component dimension="20px" />
        </Item>
      ))}
    </Container>
  );
};

export default StringReactions;
