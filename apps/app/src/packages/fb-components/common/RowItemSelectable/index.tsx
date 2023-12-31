import React from "react";
import TextLabel from "../TextLabel";
import Wrapper from "../Wrapper";
import FlexWrapper from "../FlexWrapper";
import RowDivider from "../RowDivider";

export type RowItemSelectableProps = {
  image?: React.ReactNode;
  text?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<{}>;

const RowItemSelectable = ({
  image,
  text,
  children,
  ...restProps
}: RowItemSelectableProps) => (
  <RowDivider>
    <FlexWrapper align="center" {...restProps}>
      <Wrapper m="0 10px 0 0">{image}</Wrapper>
      {text ? (
        <TextLabel textSize={300} weight textColor="vgTextBlackAlpha30">
          {text}
        </TextLabel>
      ) : (
        <Wrapper>{children}</Wrapper>
      )}
    </FlexWrapper>
  </RowDivider>
);

export default RowItemSelectable;
