import Card from "@fb-components/common/Card";
import ContainerCreateNewPost from "@fb-containers/ContainerCreateNewPost";
import ContainerGetNewsFeed from "@fb-containers/ContainerGetNewsFeed";
import Grid from "@fb-components/common/Grid";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";

const ScenePosts = () => (
  <Grid sizeColumns={["380px", "1fr"]} gap="10px">
    <Wrapper>
      <Card variant="compact">
        <Wrapper p="20px">
          <Wrapper p="0 0 20px">
            <TextLabel weight textSize={600} textColor="vgTextBlack">
              Intro
            </TextLabel>
          </Wrapper>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          accusamus. Modi similique asperiores nam a molestiae. Rem voluptatum
          sit suscipit earum eum quo, modi aut illo sequi dignissimos tempora
          quis.
        </Wrapper>
      </Card>
    </Wrapper>
    <Wrapper>
      <Wrapper>
        <ContainerCreateNewPost />
      </Wrapper>
      <Wrapper>
        <ContainerGetNewsFeed />
      </Wrapper>
    </Wrapper>
  </Grid>
);

export default ScenePosts;
