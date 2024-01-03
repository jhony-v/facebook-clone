import useScrollStack from "@fb-hooks/useScrollStack";
import { FCWithChildren } from "@utils/types";
import React from "react";
import { ContainerScrolling } from "../Atoms/elements";
import FloatingButtonToScrolling from "../Atoms/FloatingButtonToScrolling";

const ScrollingContainerHorizontal: FCWithChildren = ({ children }) => {
  const { onMove, ref } = useScrollStack({});
  return (
    <ContainerScrolling.Main>
      <ContainerScrolling.Scroll ref={ref}>
        {children}
      </ContainerScrolling.Scroll>
      <FloatingButtonToScrolling position="left" onClick={() => onMove(-1)} />
      <FloatingButtonToScrolling position="right" onClick={() => onMove(1)} />
    </ContainerScrolling.Main>
  );
};

export default ScrollingContainerHorizontal;
