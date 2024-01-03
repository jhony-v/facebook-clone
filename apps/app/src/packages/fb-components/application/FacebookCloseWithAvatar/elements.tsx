import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 16px;
  margin-top: 8px;
`;

export const StyledWrapperFacebookAnimatable = styled(motion.div)``;
StyledWrapperFacebookAnimatable.defaultProps = {
  initial: {
    x: "-100%"
  },
  animate: {
    x: 0
  }
};
