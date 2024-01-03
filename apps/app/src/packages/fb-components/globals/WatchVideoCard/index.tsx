import NewsFeedCard from "@fb-components/globals/NewsFeedCard";
import FooterWrapper from "./Atoms/FooterWrapper";
import BodyWrapper from "./Atoms/BodyWrapper";

type WatchVideoCardProps = {
  text?: string;
  video?: string;
  children?: React.ReactNode;
  reactions?: React.ReactNode;
};
const WatchVideoCard = ({
  text,
  video,
  children,
  reactions
}: WatchVideoCardProps) => (
  <NewsFeedCard>
    {children}
    <BodyWrapper text={text} video={video} />
    <FooterWrapper options={<NewsFeedCard.Options />} reactions={reactions} />
  </NewsFeedCard>
);

WatchVideoCard.Header = NewsFeedCard.Header;
WatchVideoCard.DetailReactions = NewsFeedCard.DetailReaction;

export default WatchVideoCard;
