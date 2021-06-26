import React from "react";
import { styled } from "../lib/stitches.config";
import TetraText from "./TetraText";

const Wrapper = styled("label", {
  display: "flex",
  alignItems: "center",
});

const RadioInput = styled("input", {
    display : "none"
});

const WrapperRadioCircle = styled("div", {
  size: "22px",
  borderRadius: "100%",
  marginRight : "6px",
  display : "flex",
  alignItems : "center",
  justifyContent : "center",
  variants: {
    checked: {
      true: {
        border: "2px solid $primary",
      },
      false: {
        border: "2px solid $text",
      },
    },
  },
});

const CircleChecked = styled("div", {
    size : "14px",
    backgroundColor : "$primary",
    borderRadius : "100%"
})

type BaseRadioButtonProps = {
  text?: string;
  name?: string;
  onChange?: (value: string) => void;
  label?: string;
  value?: string;
  checked ?: boolean;
};
const BaseRadioButton = (props: BaseRadioButtonProps) => {
  const { checked, name, value, onChange, label} = props;  
  const onChecked = (event : React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  }

  return (
    <Wrapper>
      <WrapperRadioCircle checked={checked}>
          {checked && <CircleChecked/>}
        </WrapperRadioCircle>
      <RadioInput type="radio" name={name} onChange={onChecked} value={value} checked={checked} />
      <TetraText>{label}</TetraText>
    </Wrapper>
  );
};

BaseRadioButton.defaultProps = {
    checked : false
}

export default BaseRadioButton;
