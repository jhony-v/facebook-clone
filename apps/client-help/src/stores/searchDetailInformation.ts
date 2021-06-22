import { atom } from "jotai";
import { tabsAtom } from "./mainNavigation.store";

export const textFilterInformationAtom = atom("");

export const splitFilterInformationAtom = atom((get) => {
  const getOptions = get(tabsAtom).map((item) => item.options.map(optionItem => {
      return {
          ...optionItem,
          categoryId : item.id
      }
  }));
  const normalizeArrayOptions = getOptions.reduce((global, item) => {
    global = [...global, ...item];
    return global;
  }, []);
  return normalizeArrayOptions;
});

export const filterDetailInformationIdAtom = atom((get) =>
  get(splitFilterInformationAtom)
    .filter((item) =>
      item.text
        .toLowerCase()
        .includes(get(textFilterInformationAtom).toLowerCase())
    )
);
