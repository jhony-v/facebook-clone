import PreviewStreamByUserProfileCard from "@fb-components/globals/PreviewStreamByUserProfileCard";
import PreviewStreamWatchVideoCard from "@fb-components/globals/PreviewStreamWatchVideoCard";
import ScrollingSlider from "@fb-components/globals/ScrollingSlider";
import Wrapper from "@fb-components/common/Wrapper";
import faker from "faker";

const GamingView = () => (
  <>
    <Wrapper />
    <Wrapper p="40px">
      <ScrollingSlider title="Suggested live now">
        {Array(20)
          .fill(0)
          .map((e, i) => (
            <Wrapper key={i} w="310px" m="0 10px 0 0">
              <PreviewStreamWatchVideoCard
                poster={faker.random.image()}
                live
                totalViews={5}
                detailStream={{
                  avatar: faker.random.image(),
                  detail: "3D Juegos - Fortnite",
                  title: "Cordinando una nueva victoria en Warzone"
                }}
              />
            </Wrapper>
          ))}
      </ScrollingSlider>
      <ScrollingSlider title="Popular games">
        {Array(20)
          .fill(0)
          .map((e, i) => (
            <Wrapper key={i} w="180px" m="0 10px 0 0">
              <PreviewStreamByUserProfileCard
                description="oeapfje"
                title="AmogUs Game by Juan"
                image={faker.random.image()}
                stringAvatars={[
                  faker.random.image(),
                  faker.random.image(),
                  faker.random.image(),
                  faker.random.image()
                ]}
                textDetail="140 followers"
                following={false}
              />
            </Wrapper>
          ))}
      </ScrollingSlider>
      <ScrollingSlider title="Suggested live now">
        {Array(20)
          .fill(0)
          .map((e, i) => (
            <Wrapper key={i} w="310px" m="0 10px 0 0">
              <PreviewStreamWatchVideoCard
                poster={faker.random.image()}
                detailStream={{
                  avatar: faker.random.image(),
                  detail: "Team Pelicula en acción",
                  title: "Comisario  · American Truck Simulator"
                }}
              />
            </Wrapper>
          ))}
      </ScrollingSlider>
    </Wrapper>
  </>
);

export default GamingView;
