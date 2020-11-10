import StringAvatars from "@fb-components/StringAvatars";
import Wrapper from "@fb-components/Wrapper";
import { CardStreamUser, ImageStreamUser, TextLabelStreamUser,CardWrapperDetailStreamUser } from "./Atoms/elements"

type PreviewStreamByUserProfileCardProps = {
  image?: string;
  title?: string;
  description?: string;
  stringAvatars?: string[];
  textDetail?: string;
  children ?: React.ReactNode;
};
const PreviewStreamByUserProfileCard = ( props: PreviewStreamByUserProfileCardProps) => {
  const { stringAvatars, description, textDetail } = props;
  return (
    <CardStreamUser>
      <ImageStreamUser src={props.image} />
      <CardWrapperDetailStreamUser>
        <TextLabelStreamUser isTitle>
            {props.title}
        </TextLabelStreamUser>
        {description && (
            <TextLabelStreamUser>
                {description}
            </TextLabelStreamUser>
        )}
        <Wrapper m="auto 0 0">
            {stringAvatars && <StringAvatars images={stringAvatars} />}
            {textDetail && (
                <TextLabelStreamUser>{textDetail}</TextLabelStreamUser>
            )}
            {props.children}
        </Wrapper>
      </CardWrapperDetailStreamUser>
    </CardStreamUser>
  );
};

export default PreviewStreamByUserProfileCard;
