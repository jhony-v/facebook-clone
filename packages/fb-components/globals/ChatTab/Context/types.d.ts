import React from "react";

export interface ChatTabProps {
  searching: boolean;
  data: [any];
  filterOptions: string;
  selectedFilterOptions: ( value: string ) => { value: string; filterValue: [any] } | string;
}


export type ChatTabPropsActions = {
  type : "TAB_SEARCH",
  payload : any
} | {
  type : "TAB_FILTER",
  payload : any
} 

export type ChatTabProviderProps = {
  children: React.ReactNode;
  data: [any];
  filterOptions: string;
  selectedFilterOption;
  onOptionSelected : (e : string) => void;
  onSearch: (data: [any], value: string) => void;
};

type ChatTabContextProps = {
  state: ChatTabProps;
  action : ChatTabPropsActions,
};


