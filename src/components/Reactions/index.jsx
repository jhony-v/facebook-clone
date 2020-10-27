import React from "react";
import Avatar from "../Common/Avatar";

const reaction = (image, alt) => (props) => (
  <Avatar {...props} src={image} alt={alt} />
);

const Reactions = {
  Like: reaction(require("../../assets/reactions/like.svg"), "like"),
  Love: reaction(require("../../assets/reactions/love.svg"), "love"),
  Sad: reaction(require("../../assets/reactions/sad.svg"), "sad"),
  Haha: reaction(require("../../assets/reactions/haha.svg"), "haha"),
  Care: reaction(require("../../assets/reactions/care.svg"), "care"),
  Angry: reaction(require("../../assets/reactions/angry.svg"), "angry"),
};

export default Reactions;
