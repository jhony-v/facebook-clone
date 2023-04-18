import { useEffect, useReducer } from "react";
import { Action, StoriesProps, Story } from "./useManagementStoriesTypes";

const reducer = (state: StoriesProps, action: Action): StoriesProps => {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        currentIndexStory: state.currentIndexStory + 1
      };
    case "PREVIOUS":
      return {
        ...state,
        currentIndexStory: state.currentIndexStory - 1
      };
    case "STOP_PLAYING":
      return {
        ...state,
        playing: false
      };
    case "START_PLAYING":
      return {
        ...state,
        playing: true
      };
    case "SET_CURRENT_INDEX_STORY":
      return {
        ...state,
        currentIndexStory: action.payload
      };
    case "SET_STATUS_LOADING":
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

type ManagementStoriesProps = {
  stories: Story[];
  duration: number;
};
const useManagementStories = ({
  stories,
  duration
}: ManagementStoriesProps) => {
  const [state, dispatch] = useReducer(reducer, {
    currentIndexStory: 0,
    totalStories: stories.length,
    stories,
    playing: false,
    loading: true
  });

  const setLoading = (loading: boolean) => {
    dispatch({ type: "SET_STATUS_LOADING", payload: loading });
  };

  const setCurrentIndexStory = (index: number) => {
    dispatch({ type: "SET_CURRENT_INDEX_STORY", payload: index });
  };

  useEffect(() => {
    if (!state.loading) {
      dispatch({ type: "START_PLAYING" });
      const timer = setTimeout(() => {
        if (state.currentIndexStory < state.totalStories - 1) {
          dispatch({ type: "NEXT" });
        } else dispatch({ type: "STOP_PLAYING" });
      }, duration * 1000);
      return () => clearTimeout(timer);
    }

    dispatch({ type: "STOP_PLAYING" });
  }, [state.loading]);

  return {
    ...state,
    currentStory: stories[state.currentIndexStory],
    setLoading,
    setCurrentIndexStory
  };
};

export default useManagementStories;
