import ContainerGetNewsFeed from "@fb-containers/ContainerGetNewsFeed";
import Wrapper from "@fb-components/common/Wrapper";

const GroupsView = () => {
  return (
    <>
      <Wrapper />
      <Wrapper m="auto" w="50%">
        <ContainerGetNewsFeed />
      </Wrapper>
    </>
  );
};

export default GroupsView;
