import React from "react";
import { DropdownTabOptionsAnimatableProvider } from "./Context/DropdownTabOptionsAnimatableContext";
import DropdownItemAnimatable from "./Molecules/DropdownItemAnimatable";
import { ContainerAnimatable } from "./Atoms/elements";
import { AnimateSharedLayout } from "framer-motion";

type DropdownTabOptionsAnimatableProps = {
  children: React.ReactNode;
  initialId: string;
  w?: string;
};
const DropdownTabOptionsAnimatable = ( props: DropdownTabOptionsAnimatableProps ) => {
  return (
    <DropdownTabOptionsAnimatableProvider initialId={props.initialId}>
      <AnimateSharedLayout>
        <ContainerAnimatable layout w={props.w}>
          {props.children}
        </ContainerAnimatable>
      </AnimateSharedLayout>
    </DropdownTabOptionsAnimatableProvider>
  );
};

DropdownTabOptionsAnimatable.Item = DropdownItemAnimatable;

export default DropdownTabOptionsAnimatable;
