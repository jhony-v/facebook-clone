import React from "react";
import ButtonClose from "@fb-components/common/ButtonClose";
import FacebookAvatar from "@fb-components/application/FacebookAvatar";
import Wrapper from "@fb-components/common/Wrapper";
import { StyledWrapper, StyledWrapperFacebookAnimatable } from "./elements";

const FacebookCloseWithAvatar = ({ onClose }: { onClose: () => void }) => (
  <StyledWrapper>
    <Wrapper m="0 5px 0 0">
      <ButtonClose onClose={onClose} />
    </Wrapper>
    <StyledWrapperFacebookAnimatable>
      <FacebookAvatar />
    </StyledWrapperFacebookAnimatable>
  </StyledWrapper>
);

export default FacebookCloseWithAvatar;
