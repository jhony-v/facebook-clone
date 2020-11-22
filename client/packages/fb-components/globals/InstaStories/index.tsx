import faker from "faker";
import UserDetailStory from "./Atoms/UserDetailStory";
import FooterStory from "./Atoms/FooterStory";
import OverflowCardBackgroundImage from "../../common/OverflowCardBackgroundImage";
import TimerStatusProgressStory from "./Molecules/TimerStatusProgressStory";
import IconsOptionStory from "./Molecules/IconsOptionStory";
import { useEffect, useReducer, useState } from "react";
import { setTimeout } from "timers";
import ProgressStory from "./Atoms/ProgressStory";
import useFetchImage from "@fb-hooks/useFetchImage";

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
  {
    image: faker.random.image(),
    text: "My first post 4",
  },
];

const InstaStories = () => {
  const duration = 5;

  const [state, dispatch] = useReducer( (state, action) => {
      switch (action.type) {
        case "NEXT": return {
            ...state,
            currentIndexStory: state.currentIndexStory + 1,
          };
        case "PREVIOUS": return { ...state };
        case "STOP_PLAYING" : return {
          ...state,
          playing : false
        }
        case "START_PLAYING" : return {
          ...state,
          playing : true
        }
        default: return state;
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
        if(state.currentIndexStory < (state.totalStories - 1)) dispatch({ type: "NEXT" });
        else dispatch({ type: "STOP_PLAYING" });
      }, duration * 1000);
      return () => clearTimeout(timer);
    }
  }, [state.currentIndexStory,state.playing]);

  const { image, text } = state.stories[state.currentIndexStory];

  return (
    <OverflowCardBackgroundImage image={image}>
      <UserDetailStory
        avatar={faker.image.people()}
        fullName={"Jhony Vega"}
        datetime="20m"
      />
      <IconsOptionStory onTogglePlay={() => {
          if(state.playing) dispatch({type:"STOP_PLAYING"})
          else dispatch({type:"START_PLAYING"})
      }} />
      <TimerStatusProgressStory>
        {[...Array(state.totalStories)].map((_, index) => {
          return (
            <ProgressStory 
            key={index}
            duration={duration} 
            playing={state.currentIndexStory === index && state.playing} />
          );
        })}
      </TimerStatusProgressStory>

      <FooterStory text={text} />
    </OverflowCardBackgroundImage>
  );
};

export default InstaStories;
