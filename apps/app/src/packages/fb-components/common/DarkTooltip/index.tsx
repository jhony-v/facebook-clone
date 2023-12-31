import React, { useState } from "react";
import styled, { css } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { FCWithChildren } from "@utils/types";

const StyledWrapper = styled.div`
  position: relative;
`;

/**
 * Main dark tooltip to show in modals
 */
type StyledTooltipTypes = {
  w?: string;
  position?: "left" | "right" | "top" | "bottom";
};
const StyledTooltip = styled(motion.div)<StyledTooltipTypes>`
  font-size: ${(props) => props.theme.fontSizes[200]};
  width: ${(props) => props.w};
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  padding: 7px 15px;
  border-radius: 7px;
  position: absolute;
  text-align: center;
  z-index: 2;
  ${(props) =>
    props.position === "bottom" &&
    css`
      bottom: -40px;
      left: 50%;
      transform: translateX(-50%);
    `}
  ${(props) =>
    props.position === "top" &&
    css`
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
    `}
  ${(props) =>
    props.position === "left" &&
    css`
      left: 0;
      top: 50%;
      transform: translateY(-50%) translateX(-100%);
    `}
  ${(props) =>
    props.position === "right" &&
    css`
      left: 0;
      top: 50%;
      transform: translateY(-50%) translateX(100%);
    `}
`;
StyledTooltip.defaultProps = {
  position: "bottom",
  exit: {
    opacity: 0
  },
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
};

type DarkTooltipProps = { text?: string } & StyledTooltipTypes;
const DarkTooltip: FCWithChildren<DarkTooltipProps> = ({
  children,
  text,
  position,
  w
}) => {
  const [visible, setVisible] = useState(false);
  const onHover = (state: boolean) => () => {
    setVisible(state);
  };

  return (
    <StyledWrapper onMouseEnter={onHover(true)} onMouseLeave={onHover(false)}>
      {children}
      <AnimatePresence>
        {visible && (
          <StyledTooltip w={w} position={position}>
            {text}
          </StyledTooltip>
        )}
      </AnimatePresence>
    </StyledWrapper>
  );
};

export default DarkTooltip;
