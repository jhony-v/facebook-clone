import StringAvatars from "@fb-components/StringAvatars";
import Wrapper from "@fb-components/Wrapper";
import { CardStreamUser, ImageStreamUser, TextLabelStreamUser,CardWrapperDetailStreamUser } from "./Atoms/elements"
import FollowButton from "./Atoms/FollowButton";
import TotalViewsFloating from "./Atoms/TotalViewsFloating";

type PreviewStreamByUserProfileCardProps = {
  image?: string;
  title?: string;
  description?: string;
  stringAvatars?: string[];
  textDetail?: string;
  children ?: React.ReactNode;
  totalViews ?: number;
  following ?: boolean;
};

const PreviewStreamByUserProfileCard = ( props: PreviewStreamByUserProfileCardProps) => {
  const { stringAvatars, description, textDetail, totalViews } = props;
  return (
    <CardStreamUser>
      <ImageStreamUser src={props.image} />
      <CardWrapperDetailStreamUser>
        <TextLabelStreamUser isTitle>{props.title}</TextLabelStreamUser>
        {description && (
            <TextLabelStreamUser>{description}</TextLabelStreamUser>
        )}
        <Wrapper m="25px 0 0">
            {stringAvatars && <StringAvatars images={stringAvatars} dimension={26} />}
            {textDetail && (
                <TextLabelStreamUser>{textDetail}</TextLabelStreamUser>
            )}
            <FollowButton following={props.following} />
            {props.children}
        </Wrapper>
      </CardWrapperDetailStreamUser>
      <TotalViewsFloating total={totalViews || 0} />
    </CardStreamUser>
  );
};

export default PreviewStreamByUserProfileCard;
