import Wrapper from "@fb-components/common/Wrapper";
import React, { memo } from "react";

type IconTypes = {
  color?: string;
  size?: number;
};
type HandlerClickTypes = {
  onClick?: () => void;
};
type OptionIconStoryProps = {
  icon: React.JSXElementConstructor<IconTypes & HandlerClickTypes>;
} & HandlerClickTypes;

const OptionIconStory = (props: OptionIconStoryProps) => {
  const { icon: IconComponent, onClick } = props;
  return (
    <Wrapper>
      <IconComponent color="white" size={28} onClick={onClick} />
    </Wrapper>
  );
};

export default memo(OptionIconStory);
