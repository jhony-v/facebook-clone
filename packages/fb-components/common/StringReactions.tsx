import React from "react";
import { covertFirstLetterToUppercase } from "@utils/transforms";
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


export type StringReactionsProps = {
  reactions : {
    [key : string] : Function
  }
}
const StringReactions = ({ reactions } : StringReactionsProps) => {
  const mapReactions = Object.keys(reactions);
  const transformReactionsToMap = mapReactions.map((e, i) => ({
    onClick: reactions[e],
    Component: Reactions[covertFirstLetterToUppercase(e)],
  }));
  return (
    <Container>
      {transformReactionsToMap.map((item, i) => (
        <Item key={i} leftPosition={i}>
          <item.Component onClick={item.onClick} dimension="20px" />
        </Item>
      ))}
    </Container>
  );
};

export default StringReactions;
