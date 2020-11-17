import React from "react";
import Card from "@fb-components/common/Card";
import Wrapper from "@fb-components/common/Wrapper";
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
