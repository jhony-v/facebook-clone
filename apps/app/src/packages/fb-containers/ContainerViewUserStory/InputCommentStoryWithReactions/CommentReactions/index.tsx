import FlexWrapper from "@fb-components/common/FlexWrapper";
import { ReactionsType } from "@fb-components/common/Reactions";
import ReactionCommentIconAnimatable from "./ReactionCommentIconAnimatable";

const icons: ReactionsType[] = ["Like", "Love", "Haha", "Care", "Sad", "Angry"];

const CommentReactions = () => (
  <FlexWrapper align="center">
    {icons.map((e, i) => (
      <ReactionCommentIconAnimatable icon={e} key={i} />
    ))}
  </FlexWrapper>
);

export default CommentReactions;
