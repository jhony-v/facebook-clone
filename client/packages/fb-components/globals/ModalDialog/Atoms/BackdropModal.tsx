import Card from "@fb-components/Card";
import Wrapper from "@fb-components/Wrapper";
import React from "react";
import AbsoluteCloseButton from "./AbsoluteCloseButton";
import { StyledBackdropScreenWrapper, WrapperBodyAnimatable } from "./elements";

type BackdropModalProps = {
  w?: string;
  onClose : () => void;
};


const BackdropModal: React.FC<BackdropModalProps> = ({w,children,onClose}) => {
  return (
    <StyledBackdropScreenWrapper>
      <Wrapper m="auto" role="dialog">
        <WrapperBodyAnimatable w={w} >
          <Card>
            <AbsoluteCloseButton onClose={onClose} />
            {children}
          </Card>
        </WrapperBodyAnimatable>
      </Wrapper>
    </StyledBackdropScreenWrapper>
  );
};

export default BackdropModal;
