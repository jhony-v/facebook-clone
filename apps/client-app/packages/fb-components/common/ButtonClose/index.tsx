import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useTheme } from "styled-components";
import RoundButton from "../RoundButton";

type ButtonCloseProps = {
  onClose: () => void;
};

const ButtonClose = ({ onClose }: ButtonCloseProps) => {
  const { colors } = useTheme();
  return (
    <RoundButton onClick={onClose} dimension="42px" role="button">
      <VscChromeClose color={colors.vgBlackAlpha40} size={20} />
    </RoundButton>
  );
};

export default ButtonClose;
