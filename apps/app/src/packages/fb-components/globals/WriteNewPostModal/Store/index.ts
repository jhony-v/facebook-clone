import { atom, selector } from "recoil";

export const textPostState = atom({
  key: "textPostState",
  default: ""
});

export const textMessageDetailsSelector = selector({
  key: "textMessageStateSelector",
  get: ({ get }) => {
    const text = get(textPostState);
    return {
      text,
      isEmpty: text.trim() === ""
    };
  }
});
