import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";

export const createNewPostOpenState = atom<boolean>({
  key: "createNewPostOpenState",
  default: false
});

export const createNewPostOpenSelector = selector({
  key: "createNewPostOpenSelector",
  get: () => {},
  set: ({ set }) => {
    set(createNewPostOpenState, (open) => !open);
  }
});

export const useCreateNewPostOpenModal = () => ({
  open: useRecoilValue(createNewPostOpenState),
  toggleModal: useSetRecoilState(createNewPostOpenSelector)
});
