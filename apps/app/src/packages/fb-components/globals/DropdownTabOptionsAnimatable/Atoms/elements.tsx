import { motion } from "framer-motion";
import styled from "styled-components";

type ContainerAnimatableTypes = {
  w?: string;
};
export const ContainerAnimatable = styled(motion.div)<ContainerAnimatableTypes>`
  background-color: ${(props) => props.theme.colors.vgBlackAlpha00};
  overflow: hidden;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  width: ${(props) => props.w || "300px"};
  position: relative;
`;

export const ItemAnimatable = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.vgBlackAlpha00};
  background-color: ${(props) => props.theme.colors.vgBlackAlpha00};
  width: 100%;
`;

ItemAnimatable.defaultProps = {
  exit: {
    transform: "translateX(-100%)",
    position: "absolute"
  },
  initial: {
    transform: "translateX(100%)"
  },
  animate: {
    transform: "translateX(0%)"
  },
  transition: {
    type: "tween"
  }
};
