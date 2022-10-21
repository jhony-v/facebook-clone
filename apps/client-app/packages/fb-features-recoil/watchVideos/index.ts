import { watchMocks } from "@mocks/index";
import { atom, useRecoilValue } from "recoil";

export const watchVideosState = atom({
  key: "watchVideosState",
  default: watchMocks.getWatchs()
});

export const useGetWatchVideosState = () => {
  const data = useRecoilValue(watchVideosState);
  return {
    data
  };
};
