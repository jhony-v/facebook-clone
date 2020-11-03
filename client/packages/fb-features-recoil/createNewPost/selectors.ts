import { selector } from "recoil";
import { createNewPostOpenState } from "./atoms";

export const createNewPostOpenSelector = selector({
    key : "createNewPostOpenSelector",
    get: () => {

    },
    set : ({set}) => {
        set(createNewPostOpenState, open => !open);
    }
});