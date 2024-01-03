import React, { Reducer } from "react";

export namespace ChatTabMetadata {
  type OptionID = string | number;
  type OnSelectedOption = (options: {
    optionId: OptionID;
    fillData: (data: any[]) => void;
  }) => void;

  type FilterOptions = {
    [key: string]: OptionID;
  };

  export interface IStateReducer {
    searching: boolean;
    data: [];
    filterOptions: FilterOptions;
    selectedFilterOption: OptionID;
  }
  export type StateUseReducer = Reducer<IStateReducer, IStateReducer>;
  export interface ContextState {
    state: IStateReducer;
    action: any;
    onSelectedOption: OnSelectedOption;
    onSearch: (data: any[], value: string) => any[];
  }

  export type ChatTabProviderProps = {
    children: React.ReactNode;
    filterOptions: FilterOptions;
    selectedFilterOption: OptionID;
    onSelectedOption: OnSelectedOption;
    onSearch: (data: any[], value: string) => any[];
  };

  export type ActionsUseReducer =
    | {
        type: "TAB_SEARCH";
        payload: any;
      }
    | {
        type: "TAB_FILTER";
        payload: any;
      };
}
