import { createContext, useContext } from "react";
import { InstaStoriesTypes } from "./InstaStoriesTypes";


type ContextType = InstaStoriesTypes.InstaStoriesContextStateProps;

export const InstaStoriesContext = createContext<ContextType | null>(null);

export const useInstaStoriesContext = () => {
  return useContext(InstaStoriesContext) as ContextType;
};
