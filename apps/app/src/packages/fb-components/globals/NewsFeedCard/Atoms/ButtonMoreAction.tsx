import RoundButton from "@fb-components/common/RoundButton";
import Wrapper from "@fb-components/common/Wrapper";
import { FiMoreHorizontal } from "react-icons/fi";

const ButtonMoreAction = () => (
  <Wrapper flexNone>
    <RoundButton dimension="40px" style={{ background: "none" }}>
      <FiMoreHorizontal size={25} color="gray" />
    </RoundButton>
  </Wrapper>
);

export default ButtonMoreAction;
