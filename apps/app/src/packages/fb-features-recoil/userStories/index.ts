import { storiesMocks } from "@mocks/index";
import { atom, useRecoilValue } from "recoil";

export const listPreviewUserStoriesState = atom({
  key: "listPreviewUserStoriesState",
  default: storiesMocks.getPreviewUserStories()
});

export const useGetPreviewUserStories = () => {
  const data = useRecoilValue(listPreviewUserStoriesState);
  return {
    data
  };
};
