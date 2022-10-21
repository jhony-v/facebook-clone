import NewsFeedCard from "@fb-components/globals/NewsFeedCard";
import { ReactionsType } from "@fb-components/common/Reactions";
import { useGetNewsFeed } from "@fb-features-recoil/newsFeed";
import { FaGlobeAsia } from "react-icons/fa";

const ContainerGetNewsFeed = () => {
  const { data } = useGetNewsFeed();
  return (
    <>
      {data.map((e, i) => (
        <NewsFeedCard key={i}>
          <NewsFeedCard.Header
            user={e.user}
            detail={{
              icon: FaGlobeAsia,
              text: e.createdAt
            }}
          />
          <NewsFeedCard.Body image={e.image} text={e.text} />
          <NewsFeedCard.DetailReaction
            reactions={e.reactions.types.map((reaction) => ({
              reaction: reaction as ReactionsType
            }))}
            totalReactions={e.reactions.total}
            textTotalDetail={`${e.comments.total} comments`}
          />
        </NewsFeedCard>
      ))}
    </>
  );
};

export default ContainerGetNewsFeed;
