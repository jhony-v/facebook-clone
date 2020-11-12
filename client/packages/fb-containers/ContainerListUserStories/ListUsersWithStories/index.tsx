import Avatar from "@fb-components/Avatar";
import FlexWrapper from "@fb-components/FlexWrapper";
import RaisedButton from "@fb-components/RaisedButton";
import Wrapper from "@fb-components/Wrapper";
import React from "react";
import faker from "faker";
import TextLabel from "@fb-components/TextLabel";

const ListUSersWithStories = () => {
  return (
    <Wrapper p="10px">
      <TextLabel weight block textColor="vgTextBlack">All stories</TextLabel>
      <Wrapper p="10px 0">
        {Array(20)
          .fill(0)
          .map((e, i) => (
            <Wrapper key={i} m="5px 0">
              <RaisedButton>
                <Wrapper w="100%">
                  <FlexWrapper align="center">
                    <Avatar src={faker.random.image()} dimension="50px" />
                    <Wrapper p="0 0 0 10px">
                      <TextLabel weight block textColor="vgTextBlack">
                        {faker.name.firstName()}
                      </TextLabel>
                      <TextLabel block textAlign="left" textSize={200}>
                        1 h
                      </TextLabel>
                    </Wrapper>
                  </FlexWrapper>
                </Wrapper>
              </RaisedButton>
            </Wrapper>
          ))}
      </Wrapper>
    </Wrapper>
  );
};

export default ListUSersWithStories;
