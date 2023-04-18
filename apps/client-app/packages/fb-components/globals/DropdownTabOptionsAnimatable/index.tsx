import React from "react";
import { AnimateSharedLayout } from "framer-motion";
import { DropdownTabOptionsAnimatableProvider } from "./Context/DropdownTabOptionsAnimatableContext";
import DropdownItemAnimatable from "./Molecules/DropdownItemAnimatable";
import { ContainerAnimatable } from "./Atoms/elements";

type DropdownTabOptionsAnimatableProps = {
  children: React.ReactNode;
  initialId: string;
  w?: string;
};
const DropdownTabOptionsAnimatable = ({
  initialId,
  w,
  children
}: DropdownTabOptionsAnimatableProps) => (
  <DropdownTabOptionsAnimatableProvider initialId={initialId}>
    <AnimateSharedLayout>
      <ContainerAnimatable layout w={w}>
        {children}
      </ContainerAnimatable>
    </AnimateSharedLayout>
  </DropdownTabOptionsAnimatableProvider>
);

DropdownTabOptionsAnimatable.Item = DropdownItemAnimatable;

export default DropdownTabOptionsAnimatable;
