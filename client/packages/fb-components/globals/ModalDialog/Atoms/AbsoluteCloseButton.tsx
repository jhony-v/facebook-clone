import ButtonClose from "@fb-components/ButtonClose";
import Wrapper from "@fb-components/Wrapper";
import React from "react";

const AbsoluteCloseButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <Wrapper absolute={{ right: "10px", top: "10px"}}>
      <ButtonClose onClose={onClose} />
    </Wrapper>
  );
};

export default AbsoluteCloseButton;
