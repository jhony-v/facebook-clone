import { navigate } from "@reach/router";
import { atom } from "jotai";
import { headerTabOptionsData } from "../data/header.data";

/* ---------------------------------- atoms --------------------------------- */

export type CurrentNavigationOption = {
  id: string;
  option: {
    id: string;
  };
};

export const tabsAtom = atom(headerTabOptionsData);
export const currenNavigationtAtom = atom<CurrentNavigationOption>({
  id: "",
  option: {
    id: "",
  },
});

/* -------------------------------- selectos -------------------------------- */

export const currentContentNavigationAtom = atom((get) => {
  return get(tabsAtom).find(
    (item) => item.id === get(currenNavigationtAtom).id
  );
});

/* --------------------------------- actions -------------------------------- */

export const selectCurrentTab = atom(
  null,
  (_get, set, payload: CurrentNavigationOption) => {
    set(currenNavigationtAtom, payload);
    navigate(payload.option.id);
  }
);
