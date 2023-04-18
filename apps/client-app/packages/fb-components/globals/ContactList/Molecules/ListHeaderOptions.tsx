import React from "react";
import FlexWrapper from "@fb-components/common/FlexWrapper";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";

type ListHeaderOptionsProps = {
  title?: string;
  children?: React.ReactNode;
};
const ListHeaderOptions = ({ title, children }: ListHeaderOptionsProps) => (
  <Wrapper p="20px 20px 0">
    <FlexWrapper justify="space-between" align="center">
      <TextLabel weight role="heading">
        {title}
      </TextLabel>
      <FlexWrapper>{children}</FlexWrapper>
    </FlexWrapper>
  </Wrapper>
);

export default ListHeaderOptions;
