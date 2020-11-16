import { postsMocks } from "@mocks/index";
import { atom, selector, useRecoilValue } from "recoil";

interface NewsFeed {
  id: string;
  image: string;
  text: string;
  createdAt: string;
  user: {
    name: string;
    avatar: string;
    id: string;
  };
  reactionIcons: string[];
  reactionUser: {
    isReaction: boolean;
    type: string;
    text: string;
  };
  reactions: {
    types: string[];
    isReaction: boolean;
    total: number;
    userReaction: {
      type: string;
      text: string;
    };
  };
  comments: {
    total: string;
  };
}

export const newsFeedState = atom({
  key: "newsFeedState",
  default: postsMocks.getPosts(),
});

export const getNewsFeedSelector = selector({
  key: "getNewsFeedSelector",
  get: ({ get }) => {
    const data = get(newsFeedState);
    return {
      data,
      isEmpty: data.length,
    };
  },
});

export const useGetNewsFeed = () => {
  const data = useRecoilValue(getNewsFeedSelector);
  return {
    ...data,
  };
};
