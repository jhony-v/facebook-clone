import React, { FC } from "react";
import { styled } from "../lib/stitches.config";
import BaseText from "./BaseText";

const Wrapper = styled("section", {
  py: "10px",
  boxSizing : "border-box"
});
const WrapperTitle = styled("div", {
  marginBottom: "10px",
});

type DividerSectionProps = {
  title?: string;
};
const DividerSection: FC<DividerSectionProps> = ({ title, children }) => {
  return (
    <Wrapper>
      {title && (
        <WrapperTitle>
          <BaseText as="h3" weight size="base">
            {title}
          </BaseText>
        </WrapperTitle>
      )}
      <div>{children}</div>
    </Wrapper>
  );
};

export default DividerSection;
