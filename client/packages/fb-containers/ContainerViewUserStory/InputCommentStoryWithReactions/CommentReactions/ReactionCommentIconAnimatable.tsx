import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import DarkTooltip from "@fb-components/common/DarkTooltip";
import Reactions, { ReactionsType } from "@fb-components/common/Reactions";

const WrapperMotion = styled(motion.div)`
  padding: 0 5px;
`;
WrapperMotion.defaultProps = {
  variants: {
    open: {
      scale: 1.3,
      rotate : [ -20 , 8 , 0 ],
      marginLeft: "10px",
      marginRight: "10px",
    },
    close: {
      rotate : 0,
      scale: 1,
      marginLeft: "0px",
      marginRight: "0px",
    },
  },
};

type ReactionIconAnimatableProps = {
  icon: ReactionsType;
  onClick?: () => void;
};
const ReactionCommentIconAnimatable = (props: ReactionIconAnimatableProps) => {
  const [open, setOpen] = useState<"close" | "open">("close");
  const IconComponent = Reactions[props.icon];
  return (
    <DarkTooltip text={props.icon} position="top">
      <WrapperMotion
        onHoverStart={() => setOpen("open")}
        onHoverEnd={() => setOpen("close")}
        onClick={props.onClick}
        animate={open}
      >
        <IconComponent />
      </WrapperMotion>
    </DarkTooltip>
  );
};

export default ReactionCommentIconAnimatable;
