import { atom } from "jotai";
import { headerTabOptionsData } from "../data/header.data";

export const tabsAtom = atom(headerTabOptionsData);
export const currentTabAtom = atom("");

export const selectCurrentTabAtom =atom(null,(_get,set,payload : string) => {
    set(currentTabAtom,payload);
})