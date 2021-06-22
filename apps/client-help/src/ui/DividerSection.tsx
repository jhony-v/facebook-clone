import { FC } from "react";
import { styled } from "../lib/stitches.config";
import BaseText from "./BaseText";

const Wrapper = styled("section", {
  py: "25px",
  boxSizing : "border-box"
});
const WrapperTitle = styled("div", {
  marginBottom: "20px",
});

type DividerSectionProps = {
  title?: string;
};
const DividerSection: FC<DividerSectionProps> = ({ title, children }) => {
  return (
    <Wrapper>
      {title && (
        <WrapperTitle>
          <BaseText as="h3" weight size="large">
            {title}
          </BaseText>
        </WrapperTitle>
      )}
      <div>{children}</div>
    </Wrapper>
  );
};

export default DividerSection;
