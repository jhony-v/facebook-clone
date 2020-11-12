import ButtonClose from "@fb-components/ButtonClose";
import FacebookAvatar from "@fb-components/FacebookAvatar";
import Wrapper from "@fb-components/Wrapper";
import React from "react";
import { StyledWrapper, StyledWrapperFacebookAnimatable } from "./elements";

const FacebookCloseWithAvatar = ({onClose}:{onClose:()=>void}) => {
  return (
    <StyledWrapper>
      <Wrapper m="0 5px 0 0">
          <ButtonClose onClose={onClose} />
      </Wrapper>
      <StyledWrapperFacebookAnimatable>
          <FacebookAvatar />
      </StyledWrapperFacebookAnimatable>
    </StyledWrapper>
  );
};

export default FacebookCloseWithAvatar;
