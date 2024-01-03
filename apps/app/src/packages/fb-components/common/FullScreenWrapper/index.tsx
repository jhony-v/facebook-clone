import { FCWithChildren } from "@utils/types";
import React, { useEffect } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
`;

const FullScreenWrapper: FCWithChildren = ({ children, ...restProps }) => {
  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflowY = "auto";
    };
  }, []);
  return <StyledWrapper {...restProps}>{children}</StyledWrapper>;
};

export default FullScreenWrapper;
