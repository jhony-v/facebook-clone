import { marketplaceMocks } from "@mocks/index";
import { atom, useRecoilValue } from "recoil";

export const listProductsState = atom({
  key: "listProductsState",
  default: marketplaceMocks.getProducts()
});

export const useGetProducts = () => {
  const data = useRecoilValue(listProductsState);
  return {
    data
  };
};
