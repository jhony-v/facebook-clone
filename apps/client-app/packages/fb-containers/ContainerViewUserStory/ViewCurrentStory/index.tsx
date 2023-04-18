import FlexWrapper from "@fb-components/common/FlexWrapper";
import Wrapper from "@fb-components/common/Wrapper";
import InstaStories from "@fb-components/globals/InstaStories";
import styled from "styled-components";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

const size = "50px";

const ButtonChangeStory = styled.div`
  border-radius: 100%;
  display: flex;
  margin: auto 10px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #3d3d3d;
  background-color: white;
  cursor: pointer;
  width: ${size};
  height: ${size};
  &:active {
    transform: scale(0.96);
  }
`;

const ViewCurrentStory = ({ user, stories }) => (
  <Wrapper m="auto">
    <FlexWrapper align="center">
      <ButtonChangeStory>
        <VscChevronLeft />
      </ButtonChangeStory>
      <InstaStories user={user} stories={stories} />
      <ButtonChangeStory>
        <VscChevronRight />
      </ButtonChangeStory>
    </FlexWrapper>
  </Wrapper>
);

export default ViewCurrentStory;
