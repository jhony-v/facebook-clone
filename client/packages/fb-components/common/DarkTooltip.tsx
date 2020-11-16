import { FC, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledTooltip = styled(motion.div)`
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 7px 15px;
  border-radius: 7px;
  position: absolute;
  text-align: center;
  bottom:-40px;
  box-shadow:0 5px 5px rgba(0,0,0,.3);
`;

StyledTooltip.defaultProps = {
  exit: {
    y: -20,
    opacity: 0,
  },
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

type DarkTooltipProps = {
  text?: string;
} ;
const DarkTooltip: FC<DarkTooltipProps> = ({ children, text }) => {
  const [visible, setVisible ] = useState(false);
  const onHover = (state : boolean) => () => {
    setVisible(state)
  };

  return (
    <StyledWrapper 
    onMouseEnter={onHover(true)} 
    onMouseLeave={onHover(false)}>
      {children}
      <AnimatePresence>
        {visible && <StyledTooltip>{text}</StyledTooltip>}
      </AnimatePresence>
    </StyledWrapper>
  );
};

export default DarkTooltip;
