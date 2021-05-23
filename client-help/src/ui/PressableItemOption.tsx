import { FC } from "react";
import { css, styled } from "../lib/stitches.config";
import PressableOverlay from "./PressableOverlay";

const TextPressableOption = styled("span", {
  fontSize: ".9rem",
  color : "$text"
});

const cssIcon = css({
    marginRight  :"8px"
})

interface PressableItemOptionProps {
  pressableButton: React.ComponentProps<typeof PressableOverlay>;
  icon ?: React.JSXElementConstructor<{size:number,className:string}> | string
}

const PressableItemOption: FC<PressableItemOptionProps> = ({
  children,
  pressableButton,
  icon : IconComponent
}) => {
  return (
    <PressableOverlay {...pressableButton}>
        {(IconComponent) && <IconComponent size={20} className={cssIcon()} />}
      <TextPressableOption>{children}</TextPressableOption>
    </PressableOverlay>
  );
};

export default PressableItemOption;
