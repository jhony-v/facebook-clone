import FlexWrapper from "@fb-components/FlexWrapper";
import { motion } from "framer-motion";
import styled from "styled-components";

export const ButtonPlayerContainer = styled(FlexWrapper)`
  border: 2px solid white;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  margin: auto;
`;

export const VideoPlayer = styled(motion.video)<{ h?: string }>`
  width: 100%;
  height: ${(props) => props.h || "180px"};
`;
