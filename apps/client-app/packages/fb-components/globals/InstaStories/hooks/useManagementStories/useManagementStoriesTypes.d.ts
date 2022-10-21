export interface Story {
  datetime?: string;
  image: string;
  text: string;
}
export interface StoriesProps {
  currentIndexStory: number;
  totalStories: number;
  stories: Story[];
  playing: boolean;
  loading: boolean;
}

export type Action =
  | {
      type: "NEXT";
    }
  | {
      type: "PREVIOUS";
    }
  | {
      type: "STOP_PLAYING";
    }
  | {
      type: "START_PLAYING";
    }
  | {
      type: "SET_CURRENT_INDEX_STORY";
      payload: number;
    }
  | {
      type: "SET_STATUS_LOADING";
      payload: boolean;
    };
