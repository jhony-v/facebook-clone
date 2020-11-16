import ContainerCreateNewPost from "@fb-components/ContainerCreateNewPost";
import { SkeletonElementCard } from "@fb-components/LoadersSkeletonElement";
import NewsFeedCard from "@fb-components/NewsFeedCard";
import { ReactionsType } from "@fb-components/Reactions";
import { useGetNewsFeed } from "@fb-features-recoil/newsFeed";
import { FaGlobeAsia } from "react-icons/fa";

// const AsyncNewsFeedExample = dynamic(()=>import("../../../examples/NewsFeed.example"),{
//     loading : () =>  <SkeletonElementCard repeat={10} />,
//     ssr:false
// })

// const AsyncCreateNewPostExample = dynamic(() => import("@fb-containers/ContainerCreateNewPost"),{
//     loading : () =>  <SkeletonElementCard repeat={1} scale="20px" />,
//     ssr: false
// })

const ContainerGetNewsFeed = () => {
  const { data } = useGetNewsFeed();
  return (
    <>
    <ContainerCreateNewPost/>
      {data.map((e, i) => (
        <NewsFeedCard key={i}>
          <NewsFeedCard.Header
            user={e.user}
            detail={{
              icon: FaGlobeAsia,
              text: e.createdAt.toString(),
            }}
          />
          <NewsFeedCard.Body image={e.image} text={e.text} />
          <NewsFeedCard.DetailReaction
            reactions={e.reactions.types.map((reaction) => ({
              reaction: reaction as ReactionsType,
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
