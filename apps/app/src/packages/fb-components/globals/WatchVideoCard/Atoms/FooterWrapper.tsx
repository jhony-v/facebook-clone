import FlexWrapper from "@fb-components/common/FlexWrapper";
import Wrapper from "@fb-components/common/Wrapper";
import React from "react";

type FooterWrapperProps = {
  options?: React.ReactNode;
  reactions?: React.ReactNode;
};

const FooterWrapper = ({ options, reactions }: FooterWrapperProps) => (
  <FlexWrapper justify="space-between" align="center">
    <Wrapper>{options}</Wrapper>
    <Wrapper>{reactions}</Wrapper>
  </FlexWrapper>
);

export default FooterWrapper;
