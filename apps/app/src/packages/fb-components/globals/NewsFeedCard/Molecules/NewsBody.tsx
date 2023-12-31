import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import { StyledNewsMainImage } from "../Atoms/elements";

type NewsBodyProps = {
  text?: string;
  image?: string;
};
const NewsBody = ({ text, image }: NewsBodyProps) => (
  <Wrapper p="20px 0">
    <Wrapper p="0 10px 10px">
      <TextLabel textColor="vgTextBlack" textSize={300}>
        {text}
      </TextLabel>
    </Wrapper>
    <StyledNewsMainImage src={image} />
  </Wrapper>
);

export default NewsBody;
