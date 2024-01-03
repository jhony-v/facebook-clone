import { FCWithChildren } from "@utils/types";
import React, { createContext, useContext, useState } from "react";

interface DropdownTabAnimatableState {
  idSelected?: string;
  onSelectId?: (value: string) => void;
}

interface DropdownProviderState {
  initialId: string;
}

const DropdownTabAnimatableContext =
  createContext<DropdownTabAnimatableState | null>(null);

export const DropdownTabOptionsAnimatableProvider: FCWithChildren<
  DropdownProviderState
> = ({ children, initialId }) => {
  const [id, setId] = useState<string>(initialId);

  const value = {
    idSelected: id,
    onSelectId: setId
  };

  return (
    <DropdownTabAnimatableContext.Provider value={value}>
      {children}
    </DropdownTabAnimatableContext.Provider>
  );
};

export const useDropdownTabAnimatableContext = () =>
  useContext(DropdownTabAnimatableContext) as DropdownTabAnimatableState;
export default DropdownTabAnimatableContext;
