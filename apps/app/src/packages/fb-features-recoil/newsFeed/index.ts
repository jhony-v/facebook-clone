import { postsMocks } from "@mocks/index";
import { atom, selector, useRecoilValue } from "recoil";


export const newsFeedState = atom({
  key: "newsFeedState",
  default: postsMocks.getPosts()
});

export const getNewsFeedSelector = selector({
  key: "getNewsFeedSelector",
  get: ({ get }) => {
    const data = get(newsFeedState);
    return {
      data,
      isEmpty: data.length
    };
  }
});

export const useGetNewsFeed = () => {
  const data = useRecoilValue(getNewsFeedSelector);
  return {
    ...data
  };
};
