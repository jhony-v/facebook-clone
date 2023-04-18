import Grid from "@fb-components/common/Grid";
import TextLabel from "@fb-components/common/TextLabel";
import Wrapper from "@fb-components/common/Wrapper";
import SuggestedPageItemCard from "@fb-components/globals/SuggestedPageItemCard";
import faker from "faker";

const PagesView = () => (
  <>
    <Wrapper />
    <Wrapper w="70%" m="auto">
      <Wrapper m="40px 0">
        <TextLabel weight textColor="vgTextBlack" textSize={600}>
          Suggested for your
        </TextLabel>
      </Wrapper>
      <Wrapper>
        <Grid repeatColumns={2} gap="15px">
          {Array(10)
            .fill(0)
            .map((e, i) => (
              <SuggestedPageItemCard
                key={i}
                image={faker.random.image()}
                avatar={faker.random.image()}
                liked
                likes={40}
                category="Software"
                name="Club de Programación"
              />
            ))}
        </Grid>
      </Wrapper>
    </Wrapper>
  </>
);

export default PagesView;
