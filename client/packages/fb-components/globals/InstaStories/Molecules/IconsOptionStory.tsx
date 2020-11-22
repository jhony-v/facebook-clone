import styled from "styled-components";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import Wrapper from "@fb-components/common/Wrapper";
import OptionIconStory from "../Atoms/OptionIconStory";
import { InstaStoryPosition } from "../InstaConfig/config";
import { converMeasureCSSToNumber } from "@utils/transforms";
import { RiMoreFill, RiPlayFill } from "react-icons/ri";

const IconsStoryWrapper = styled(FlexWrapper)`
  position: absolute;
  top: ${converMeasureCSSToNumber(InstaStoryPosition) * 2}px;
  right: ${InstaStoryPosition};
  align-items: center;
  height:40px;
  ${Wrapper} {
      margin-left:15px;
  }
`;


type IconsOptionStoryProps = {
  onTogglePlay : () => void;
}
const IconsOptionStory = (props : IconsOptionStoryProps) => {
  return (
    <IconsStoryWrapper>
      <OptionIconStory onClick={props.onTogglePlay}  icon={RiPlayFill} />
      <OptionIconStory icon={RiMoreFill} />
    </IconsStoryWrapper>
  );
};

export default IconsOptionStory;
