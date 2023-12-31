import FlexWrapper from "@fb-components/common/FlexWrapper";
import StringReactions, {
  StringReactionType
} from "@fb-components/common/StringReactions";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";

type NewsDetailReactionProps = {
  reactions?: StringReactionType[];
  totalReactions?: number;
  textTotalDetail?: string;
};

const NewsDetailReaction = ({
  reactions,
  totalReactions,
  textTotalDetail
}: NewsDetailReactionProps) => (
  <Wrapper p="5px 10px">
    <FlexWrapper justify="space-between" align="center">
      <FlexWrapper align="center">
        {reactions && <StringReactions reactions={reactions} />}
        <TextLabel textSize={300}>{totalReactions}</TextLabel>
      </FlexWrapper>
      <Wrapper>
        <TextLabel textSize={300}>{textTotalDetail}</TextLabel>
      </Wrapper>
    </FlexWrapper>
  </Wrapper>
);

export default NewsDetailReaction;
