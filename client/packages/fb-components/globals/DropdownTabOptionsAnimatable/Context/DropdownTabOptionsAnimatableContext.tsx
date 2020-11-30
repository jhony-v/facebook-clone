import React, {
  createContext, FC, useContext, useMemo, useState,
} from 'react';

interface DropdownTabAnimatableState {
  idSelected?: string;
  onSelectId?: (value : string) => void;
}

interface DropdownProviderState {
  initialId: string;
}

const DropdownTabAnimatableContext = createContext<DropdownTabAnimatableState | null>(null);

export const DropdownTabOptionsAnimatableProvider: FC<DropdownProviderState> = (props) => {
  const [id, setId] = useState<string>(props.initialId);

  const value = {
    idSelected: id,
    onSelectId: setId,
  };

  return (
    <DropdownTabAnimatableContext.Provider value={value}>
      {props.children}
    </DropdownTabAnimatableContext.Provider>
  );
};

export const useDropdownTabAnimatableContext = () => useContext(DropdownTabAnimatableContext) as DropdownTabAnimatableState;
export default DropdownTabAnimatableContext;
