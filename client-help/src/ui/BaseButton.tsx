import React, { FC } from "react";
import { styled } from "../lib/stitches.config";
import PressableOverlay from "./PressableOverlay";

const PressableButtonWrapper = styled(PressableOverlay, {
  fontWeight : "bold",
  variants: {
    variant: {
      secondary: {
        backgroundColor: "$text200",
        color: "$text",
        "&:hover": {
          backgroundColor: "$text300",
        }
      },
      primary: {
        backgroundColor: "$primary",
        color: "$text100",
      },
    },
  },
});


type BaseButtonProps = {
  variant?: keyof typeof PressableButtonWrapper["variants"]["variant"];
};

const BaseButton: FC<BaseButtonProps> = ({ children, variant }) => {
  return (
    <PressableButtonWrapper as="button" variant={variant}>
      {children}
    </PressableButtonWrapper>
  );
};

export default BaseButton;
