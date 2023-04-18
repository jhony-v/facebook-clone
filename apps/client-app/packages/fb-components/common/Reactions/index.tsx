import React from "react";
import Avatar, { AvatarTypes } from "../Avatar";

const reaction = (image: string, alt: string) => (props: AvatarTypes) =>
  <Avatar {...props} src={image} alt={alt} />;

export type ReactionsType = keyof typeof Reactions;

const Reactions = {
  Like: reaction("/assets/reactions/like.svg", "like"),
  Love: reaction("/assets/reactions/love.svg", "love"),
  Sad: reaction("/assets/reactions/sad.svg", "sad"),
  Haha: reaction("/assets/reactions/haha.svg", "haha"),
  Care: reaction("/assets/reactions/care.svg", "care"),
  Angry: reaction("/assets/reactions/angry.svg", "angry")
};

export default Reactions;
