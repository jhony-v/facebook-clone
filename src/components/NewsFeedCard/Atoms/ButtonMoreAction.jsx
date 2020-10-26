import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import RoundButton from "../../Common/RoundButton";
import Wrapper from "../../Common/Wrapper";

const ButtonMoreAction = () => {
  return (
      <Wrapper lfexNone>
        <RoundButton dimension="40px" hover>
          <FiMoreHorizontal size={25} color="gray" />
        </RoundButton>
      </Wrapper>
  );
};

export default ButtonMoreAction;
