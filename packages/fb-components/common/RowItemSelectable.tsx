import React from "react";
import TextLabel from "./TextLabel";
import Wrapper from "./Wrapper";
import styled from "styled-components";
import FlexWrapper from "./FlexWrapper";

export const StyledRowItemSelectable = styled(FlexWrapper)`
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  transition: background-color 0.3s;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

export type RowItemSelectableProps = {
  image ?: React.ReactNode;
  text ?: string;
  children ?: React.ReactNode;
} & React.HTMLAttributes<{}>

const RowItemSelectable = ({ image, text, children, ...restProps }  :RowItemSelectableProps) => {
  return (
    <StyledRowItemSelectable {...restProps}>
      <Wrapper m="0 10px 0 0">{image}</Wrapper>
      {text ? (
        <TextLabel textSize={300} weight>
          {text}
        </TextLabel>
      ) : (
        <Wrapper>{children}</Wrapper>
      )}
    </StyledRowItemSelectable>
  );
};

export default RowItemSelectable;
