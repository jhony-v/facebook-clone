import Card from "@fb-components/Card";
import Wrapper from "@fb-components/Wrapper";
import React from "react";
import { StyledBackdropScreenWrapper } from "./elements";

type BackdropModalProps = {
  w?: string;
};
const BackdropModal: React.FC<BackdropModalProps> = ({w,children}) => {
  return (
    <StyledBackdropScreenWrapper>
      <Wrapper m="auto" role="dialog">
        <Wrapper w={w}>
          <Card>{children}</Card>
        </Wrapper>
      </Wrapper>
    </StyledBackdropScreenWrapper>
  );
};

export default BackdropModal;
