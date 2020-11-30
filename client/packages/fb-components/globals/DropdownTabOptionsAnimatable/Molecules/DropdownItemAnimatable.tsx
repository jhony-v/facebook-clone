import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { ItemAnimatable } from '../Atoms/elements';
import { useDropdownTabAnimatableContext } from '../Context/DropdownTabOptionsAnimatableContext';

type DropdownItemAnimatableProps = {
  id: string;
  children: (props: { onSelectId: (value: string) => void | null}) => React.ReactNode;
};

const DropdownItemAnimatable = (props: DropdownItemAnimatableProps) => {
  const { idSelected, onSelectId } = useDropdownTabAnimatableContext();

  const handlerOnSelectId = (value : string) => {
    onSelectId && onSelectId(value);
  };
  return (
    <AnimatePresence>
      {idSelected === props.id && (
        <ItemAnimatable>
          {props.children({ onSelectId: handlerOnSelectId })}
        </ItemAnimatable>
      )}
    </AnimatePresence>
  );
};

export default DropdownItemAnimatable;
