import React from "react";
import { AnimatePresence } from "framer-motion";
import { ItemAnimatable } from "../Atoms/elements";
import { useDropdownTabAnimatableContext } from "../Context/DropdownTabOptionsAnimatableContext";

type DropdownItemAnimatableProps = {
  id: string;
  children: (props: {
    onSelectId: (value: string) => void | null;
  }) => React.ReactNode;
};

const DropdownItemAnimatable = ({
  children,
  id
}: DropdownItemAnimatableProps) => {
  const { idSelected, onSelectId } = useDropdownTabAnimatableContext();

  const handlerOnSelectId = (value: string) => {
    onSelectId && onSelectId(value);
  };
  return (
    <AnimatePresence>
      {idSelected === id && (
        <ItemAnimatable>
          {children({ onSelectId: handlerOnSelectId })}
        </ItemAnimatable>
      )}
    </AnimatePresence>
  );
};

export default DropdownItemAnimatable;
