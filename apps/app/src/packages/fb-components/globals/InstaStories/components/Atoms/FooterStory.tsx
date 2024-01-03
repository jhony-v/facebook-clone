import styled from "styled-components";
import { InstaStoryPosition } from "../../InstaConfig/config";
import TextStory from "./TextStory";

const FooterStoryWrapper = styled.div`
  position: absolute;
  bottom: ${InstaStoryPosition};
  left: ${InstaStoryPosition};
`;

type FooterStoryProps = {
  text?: string;
};
const FooterStory = ({ text }: FooterStoryProps) => (
  <FooterStoryWrapper>
    <TextStory>{text}</TextStory>
  </FooterStoryWrapper>
);

export default FooterStory;
