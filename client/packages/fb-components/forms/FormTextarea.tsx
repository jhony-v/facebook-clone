import React from "react";
import styled from "styled-components";

const StyledFormTextArea = styled.textarea`
  font-size: ${(props) => props.theme.fontSizes[700]};
  resize:none;
  width:100%;
  &::-webkit-input-placeholder {
    color:${props => props.theme.colors.vgTextBlackAlpha10};
  }
`;

type FormTextAreaProps = React.TextareaHTMLAttributes<{}>;

const FormTextarea = (props: FormTextAreaProps) => {
  return <StyledFormTextArea {...props} />;
};

export default FormTextarea;
