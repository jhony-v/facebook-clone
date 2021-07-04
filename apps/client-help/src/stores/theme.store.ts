import { atom } from "jotai";
import { darkTheme } from "../lib/stitches.config";

/* ---------------------------------- atoms --------------------------------- */

export const DEFAULT_THEME = "light";
export const DARK_THEME = "dark";
export const KEY_THEME = "theme";

export const themeAtom = atom(DEFAULT_THEME)

/* --------------------------------- actions -------------------------------- */

export const toggleTheme = atom(null, (get, set) => {
  const theme = get(themeAtom) === DEFAULT_THEME ? darkTheme : DEFAULT_THEME;
  set(themeAtom, theme);
  localStorage.setItem(KEY_THEME, theme);
});


export const isDarkThemeAtom = atom(get => get(themeAtom) !== DEFAULT_THEME);

themeAtom.onMount = setAtom => {
  const storageTheme = localStorage.getItem(KEY_THEME);
  if(storageTheme) {
    setAtom(storageTheme === DEFAULT_THEME ? DEFAULT_THEME : darkTheme);
  }
}