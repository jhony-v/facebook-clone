import React, { FC } from "react";
import { styled } from "../lib/stitches.config";
import PressableOverlay from "./PressableOverlay";

const PressableButtonWrapper = styled(PressableOverlay, {
  fontWeight: "bold",
  variants: {
    variant: {
      secondary: {
        backgroundColor: "$text200",
        color: "$text",
        "&:hover": {
          backgroundColor: "$text300",
        },
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
  className?: string;
  icon?: React.JSXElementConstructor<{ size: number }>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const BaseButton: FC<BaseButtonProps> = (props) => {
  const { children, variant, className, icon: IconComponent, onClick } = props;

  return (
    <PressableButtonWrapper
      as="button"
      variant={variant}
      className={className}
      onClick={onClick}
    >
      {IconComponent && <IconComponent size={18} />}
      {children}
    </PressableButtonWrapper>
  );
};

export default BaseButton;
