import { atom } from "jotai";
import { darkTheme } from "../lib/stitches.config";

/* ---------------------------------- atoms --------------------------------- */

const DEFAULT_THEME = "light";
const THEME = "theme";

export const themeAtom = atom(DEFAULT_THEME)

/* --------------------------------- actions -------------------------------- */

export const toggleTheme = atom(null, (get, set) => {
  const theme = get(themeAtom) === DEFAULT_THEME ? darkTheme : DEFAULT_THEME;
  set(themeAtom, theme);
  localStorage.setItem(THEME, theme);
});


themeAtom.onMount = setAtom => {
  const storageTheme = localStorage.getItem(THEME);
  if(storageTheme) {
    setAtom(storageTheme === DEFAULT_THEME ? DEFAULT_THEME : darkTheme);
  }
}