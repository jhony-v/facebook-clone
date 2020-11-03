import FlexWrapper from "@fb-components/FlexWrapper";
import Wrapper from "@fb-components/Wrapper";
import React from "react";

type FooterWrapperProps = {
  options?: React.ReactNode;
  reactions?: React.ReactNode;
};

const FooterWrapper = ({ options, reactions }: FooterWrapperProps) => {
  return (
    <FlexWrapper justify="space-between" align="center">
      <Wrapper>{options}</Wrapper>
      <Wrapper>{reactions}</Wrapper>
    </FlexWrapper>
  );
};

export default FooterWrapper;
