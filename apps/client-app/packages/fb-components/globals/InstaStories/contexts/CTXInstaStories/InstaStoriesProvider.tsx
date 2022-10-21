import { FC } from "react";
import useManagementStories from "../../hooks/useManagementStories/useManagementStories";
import { InstaStoriesContext } from "./InstaStoriesContext";
import { InstaStoriesTypes } from "./InstaStoriesTypes";

const InstaStoriesProvider: FC<InstaStoriesTypes.InstaStoriesProviderProps> = ({
  children,
  stories,
  duration
}) => {
  const valueStories = useManagementStories({ stories, duration });
  return (
    <InstaStoriesContext.Provider value={{ ...valueStories, duration }}>
      {children}
    </InstaStoriesContext.Provider>
  );
};

export default InstaStoriesProvider;
