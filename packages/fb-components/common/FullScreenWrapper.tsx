import { useEffect } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
`;

const FullScreenWrapper: React.FC<{}> = ({ children, ...restProps }) => {
  useEffect(() => {
      document.documentElement.style.overflow = "hidden";
  }, []);
  return <StyledWrapper {...restProps}>{children}</StyledWrapper>;
};

export default FullScreenWrapper;
