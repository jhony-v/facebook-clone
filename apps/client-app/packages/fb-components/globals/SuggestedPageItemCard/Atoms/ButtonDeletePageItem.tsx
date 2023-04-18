import RoundButton from "@fb-components/common/RoundButton";
import Wrapper from "@fb-components/common/Wrapper";
import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";

const RoundCloseButton = styled(RoundButton)`
  background-color: rgba(0, 0, 0, 0.6);
`;

const ButtonDeletePageItem = () => (
  <Wrapper
    absolute={{
      right: "0px",
      top: "0px"
    }}
    m="10px"
  >
    <RoundCloseButton colorIcon="vgBlackAlpha00" dimension="35px">
      <VscChromeClose size={20} />
    </RoundCloseButton>
  </Wrapper>
);

export default ButtonDeletePageItem;
