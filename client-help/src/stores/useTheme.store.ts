import { atom } from "jotai";
import { darkTheme } from "../lib/stitches.config";

const DEFAULT_THEME = "light";
const THEME = "theme";

export const themeAtom = atom(DEFAULT_THEME);

export const toggleTheme = atom(null, (get, set) => {
  const theme = get(themeAtom) === DEFAULT_THEME ? darkTheme : DEFAULT_THEME;
  set(themeAtom, theme);
  localStorage.setItem(THEME, theme);
});

toggleTheme.onMount = (setAtom) => {
  setAtom(localStorage.getItem(THEME) || "light");
};
