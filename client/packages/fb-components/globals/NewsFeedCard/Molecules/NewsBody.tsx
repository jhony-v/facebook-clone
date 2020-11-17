import TextLabel from "@fb-components/TextLabel";
import Wrapper from "@fb-components/Wrapper";
import { StyledNewsMainImage } from "../Atoms/elements";

type NewsBodyProps = {
  text ?: string;
  image ?: string;
}
const NewsBody = ({ text, image }: NewsBodyProps) => {
  return (
    <Wrapper p="20px 0">
      <Wrapper p="0 10px 10px">
        <TextLabel textColor="vgTextBlack" textSize={300}>{text}</TextLabel>
      </Wrapper>
      <StyledNewsMainImage src={image} />
    </Wrapper>
  );
};

export default NewsBody;
