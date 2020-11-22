import faker from "faker";
import UserDetailStory from "./Atoms/UserDetailStory";
import FooterStory from "./Atoms/FooterStory";
import OverflowCardBackgroundImage from "../../common/OverflowCardBackgroundImage";
import TimerStatusProgressStory from "./Molecules/TimerStatusProgressStory";
import IconsOptionStory from "./Molecules/IconsOptionStory";
import { useEffect, useReducer, useState } from "react";
import { setTimeout } from "timers";
import ProgressStory from "./Atoms/ProgressStory";

const stories = [
  {
    image: faker.random.image(),
    text: "Hello from Peru 1",
  },
  {
    image: faker.random.image(),
    text: "Welcome back people :) 2",
  },
  {
    image: faker.random.image(),
    text: "My first post 3",
  },
];

const InstaStories = () => {
  const duration = 5;

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "NEXT": return {
            ...state,
            currentIndexStory:
              (state.currentIndexStory + 1) % state.totalStories,
          };
        case "PREVIOUS": return { ...state };
        case "STOP_PLAYING" : return {
          ...state,
          playing : false
        }
        default:
          return state;
      }
    },
    {
      currentIndexStory: 0,
      totalStories: stories.length,
      stories: stories,
      playing : true,
    }
  );
  useEffect(() => {
    if(state.playing) {
      const timer = setTimeout(() => {
        dispatch({ type: "NEXT" });
      }, duration * 1000);
      return () => clearTimeout(timer);
    }
  }, [state.currentIndexStory,state.playing]);

  useEffect(() => {
    if(state.currentIndexStory === state.totalStories - 2) {
      dispatch({type:"STOP_PLAYING"})
    }
  }, [state.currentIndexStory]);

  const { image, text } = state.stories[state.currentIndexStory];
  return (
    <OverflowCardBackgroundImage image={image}>
      <UserDetailStory
        avatar={faker.image.people()}
        fullName={"Jhony Vega"}
        datetime="20m"
      />
      <IconsOptionStory />
      <TimerStatusProgressStory>
        {[...Array(state.totalStories)].map((_, index) => {
          return <ProgressStory duration={duration} playing={state.currentIndexStory === index} />;
        })}
      </TimerStatusProgressStory>

      <FooterStory text={text} />
    </OverflowCardBackgroundImage>
  );
};

export default InstaStories;
