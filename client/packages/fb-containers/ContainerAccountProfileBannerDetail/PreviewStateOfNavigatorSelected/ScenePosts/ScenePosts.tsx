import Card from "@fb-components/Card";
import Grid from "@fb-components/Grid";
import Wrapper from "@fb-components/Wrapper";
import NewsFeedExample from "examples/NewsFeed.example";
import CreateNewPostExample from "../../../../../examples/CreateNewPost.example";

const ScenePosts = () => {
  return (
    <Grid sizeColumns={["350px", "1fr"]} gap="10px">
      <Wrapper>
          <Card variant="compact">
              <Wrapper p="20px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, accusamus. Modi similique asperiores nam a molestiae. Rem voluptatum sit suscipit earum eum quo, modi aut illo sequi dignissimos tempora quis.
              </Wrapper>
          </Card>
      </Wrapper>
      <Wrapper>
        <Wrapper>
          <CreateNewPostExample />
        </Wrapper>
        <Wrapper>
          <NewsFeedExample />
        </Wrapper>
      </Wrapper>
    </Grid>
  );
};

export default ScenePosts;
