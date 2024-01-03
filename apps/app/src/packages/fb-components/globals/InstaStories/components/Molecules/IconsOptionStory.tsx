import styled from "styled-components";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import Wrapper from "@fb-components/common/Wrapper";
import { converMeasureCSSToNumber } from "@utils/transforms";
import { RiMoreFill, RiPlayFill } from "react-icons/ri";
import OptionIconStory from "../Atoms/OptionIconStory";
import { InstaStoryPosition } from "../../InstaConfig/config";

const IconsStoryWrapper = styled(FlexWrapper)`
  position: absolute;
  top: ${converMeasureCSSToNumber(InstaStoryPosition) * 2}px;
  right: ${InstaStoryPosition};
  align-items: center;
  height: 40px;
  ${Wrapper} {
    margin-left: 15px;
  }
`;

type IconsOptionStoryProps = {
  onTogglePlay: () => void;
};
const IconsOptionStory = ({ onTogglePlay }: IconsOptionStoryProps) => (
  <IconsStoryWrapper>
    <OptionIconStory onClick={onTogglePlay} icon={RiPlayFill} />
    <OptionIconStory icon={RiMoreFill} />
  </IconsStoryWrapper>
);

export default IconsOptionStory;
