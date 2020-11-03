import { useRecoilValue, useSetRecoilState } from "recoil";
import { createNewPostOpenState } from "./atoms";
import { createNewPostOpenSelector } from "./selectors";

export const useCreateNewPostOpenModal = () => ({
    open : useRecoilValue(createNewPostOpenState),
    toggleModal : useSetRecoilState(createNewPostOpenSelector)
})
