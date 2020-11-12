import React from "react";
import RoundButton from "@fb-components/RoundButton";
import Wrapper from "@fb-components/Wrapper";
import { useTheme } from "styled-components";

type ButtonOptionProps = {
  icon: React.JSXElementConstructor<{ size: number, color:string }>;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const ButtonOption = ({ icon: IconComponent, onClick }: ButtonOptionProps) => {
  const { colors } = useTheme();
  return (
    <Wrapper m="0 0 0 5px">
      <RoundButton dimension="40px" onClick={onClick}>
        <IconComponent size={16} color={colors.vgBlackAlpha40} />
      </RoundButton>
    </Wrapper>
  );
};

ButtonOption.defaultProps = {
  onClick: () => null,
};

export default ButtonOption;
