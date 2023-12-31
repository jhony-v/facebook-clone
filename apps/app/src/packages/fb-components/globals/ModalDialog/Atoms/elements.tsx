import Card from "@fb-components/common/Card";
import FullScreenWrapper from "@fb-components/common/FullScreenWrapper";
import Wrapper from "@fb-components/common/Wrapper";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const StyledBackdropScreenWrapper = styled(FullScreenWrapper)`
  background-color: rgba(230, 230, 230, 0.8);
  display: flex;
  overflow-y: auto;
  ${Card} {
    position: relative;
  }
`;

export const WrapperBodyAnimatable = styled(motion.div)<{ w?: string }>`
  width: ${(props) => props.w};
`;
WrapperBodyAnimatable.defaultProps = {
  initial: {
    scale: 0.6
  },
  animate: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 180
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1
    }
  }
};

type StyledHeaderWrapperProps = {
  border?: boolean;
};
export const StyledHeaderWrapper = styled(Wrapper)<StyledHeaderWrapperProps>`
  ${(props) =>
    props.border &&
    css`
      border-bottom: 1px solid ${props.theme.colors.vgBlackAlpha20};
    `}
`;
