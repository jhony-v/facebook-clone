import Card from "@fb-components/Card";
import FlexWrapper from "@fb-components/FlexWrapper";
import TextLabel from "@fb-components/TextLabel";
import Wrapper from "@fb-components/Wrapper";
import styled from "styled-components";
import { RiVideoAddFill } from "react-icons/ri";
import { MdPhotoLibrary,MdLocationOn, MdTagFaces } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";

const S = {
    Card: styled(Card)`
      margin: 1em auto;
      border: 1px solid rgba(0, 0, 0, 0.2);
      box-shadow: none;
      display: flex;
      align-items: center;
      padding: 15px;
      justify-content: space-between;
    `,
};
  
type IconOptionProps = {
    color : string;
    onClick ?: () => void;
    icon : React.JSXElementConstructor<{[key : string]:any}>
}
const IconOption = (props:IconOptionProps) => {
  return <Wrapper m="0 15px 0 0" onClick={props.onClick}>
        <props.icon color={props.color} size={25} />
  </Wrapper>;
};


const OptionsAddMoreInformation = () => {
  return (
    <S.Card>
      <TextLabel weight textColor="vgTextBlack">Add to your post</TextLabel>
      <FlexWrapper align="center">
        <IconOption color="#9575cd" icon={RiVideoAddFill} />
        <IconOption color="#00c853" icon={MdPhotoLibrary} />
        <IconOption color="rgb(30,130,230)" icon={FaUserPlus} />
        <IconOption color="orange" icon={MdTagFaces} />
        <IconOption color="#ef5350" icon={MdLocationOn} />
      </FlexWrapper>
    </S.Card>
  );
};


export default OptionsAddMoreInformation;
