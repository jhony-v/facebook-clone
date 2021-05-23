import { useParams } from "@reach/router";
import { atom } from "jotai";
import { headerTabOptionsData } from "../data/header.data";
import Fuse from "fuse.js";

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

export const selectCurrentTabInitialState = atom(null, (get, set,helpId: string) => {
  const data = get(tabsAtom);
  const searchData = new Fuse(data, {
    useExtendedSearch: true,
    keys: ["options.id"],
  });
  const current = searchData.search(`=${helpId}`)[0]?.item;
  if (current) {
    set(currenNavigationtAtom, {
      id: current.id,
      option: {
        id: current.id,
      },
    });
  }
});
