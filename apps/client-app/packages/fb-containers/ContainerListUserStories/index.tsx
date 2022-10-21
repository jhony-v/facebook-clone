import Wrapper from "@fb-components/common/Wrapper";
import AddNewPublicStory from "./AddNewPublicStory";
import HeaderListUsers from "./HeaderListUsers";
import ListUsersWithStories from "./ListUsersWithStories";

const ContainerListUserStories = () => (
  <Wrapper>
    <HeaderListUsers />
    <AddNewPublicStory />
    <ListUsersWithStories />
  </Wrapper>
);

export default ContainerListUserStories;
