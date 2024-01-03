export namespace InstaStoriesTypes {
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

  export interface InstaStoriesContextStateProps extends StoriesProps {
    currentStory: Story;
    duration: number;
    setLoading: (loading: boolean) => void;
    setCurrentIndexStory: (index: number) => void;
  }

  export interface InstaStoriesProviderProps {
    stories: Story[];
    duration: number;
  }
}
