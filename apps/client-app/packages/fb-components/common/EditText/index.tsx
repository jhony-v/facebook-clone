import React from "react";
import styled, { css } from "styled-components";

const options = {
  primary: "primary",
  outline: "outline",
  darker: "darker"
};

export type StyledEditTextTypes = {
  variant?: keyof typeof options;
  w?: string;
  fluid?: boolean;
};

const StyledEditText = styled.input<StyledEditTextTypes>`
  padding: 15px 20px;
  border-radius: 10px;
  outline: none;
  border-width: 0;
  width: ${(props) => (props.fluid ? "100%" : props.w || "auto")};
  ${(props) =>
    props.variant === options.primary &&
    css`
      background-color: ${props.theme.colors.vgBlackAlpha10};
      color: ${props.theme.colors.vgTextBlackAlpha20};
    `}
  ${(props) =>
    props.variant === options.outline &&
    css`
      border: 1px solid ${props.theme.colors.vgBlackAlpha20};
    `}

  ${(props) =>
    props.variant === options.darker &&
    css`
      background-color: ${props.theme.colors.vgBlackAlpha20};
      color: ${props.theme.colors.vgTextBlackAlpha30};
    `}
`;

type Ref = HTMLInputElement;
type EditTextProps = StyledEditTextTypes & React.InputHTMLAttributes<{}>;
const EditText = React.forwardRef<Ref, EditTextProps>((props, ref) => (
  <StyledEditText {...props} ref={ref} />
));

export default EditText;
