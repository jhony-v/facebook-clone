import { atom } from "recoil";

export const createNewPostOpenState = atom<boolean>({
    key : "createNewPostOpenState",
    default : false
})
