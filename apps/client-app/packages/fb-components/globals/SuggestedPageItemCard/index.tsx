import Wrapper from "@fb-components/common/Wrapper";
import SuggestedPageWrapper from "./Atoms/SuggestedPageWrapper";
import CoverPageImage from "./Atoms/CoverPageImage";
import PageLikeButton from "./Atoms/PageLikeButton";
import PageInformation, {
  PageInformationProps
} from "./Molecules/PageInformation";
import ButtonDeletePageItem from "./Atoms/ButtonDeletePageItem";

type SuggestedPageItemCardProps = {
  image?: string;
  liked?: boolean;
} & PageInformationProps;

const SuggestedPageItemCard = (props: SuggestedPageItemCardProps) => {
  const { image, liked, ...pageInformation } = props;
  return (
    <SuggestedPageWrapper>
      <CoverPageImage src={image} />
      <ButtonDeletePageItem />
      <Wrapper p="10px">
        <PageInformation {...pageInformation} />
        <PageLikeButton liked={liked} />
      </Wrapper>
    </SuggestedPageWrapper>
  );
};

export default SuggestedPageItemCard;
