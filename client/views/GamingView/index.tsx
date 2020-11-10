import ContainerMainNavigator from "@fb-components/ContainerMainNavigator";
import ContainerOptionsNavigation from "@fb-components/ContainerOptionsNavigation";
import LayoutsDrawer from "@fb-components/LayoutsDrawer";
import PreviewStreamByUserProfileCard from "@fb-components/PreviewStreamByUserProfileCard";
import PreviewStreamWatchVideoCard from "@fb-components/PreviewStreamWatchVideoCard";
import ScrollingSlider from "@fb-components/ScrollingSlider";
import Wrapper from "@fb-components/Wrapper";
import ChatTabExample from "examples/ChatTab.example";
import faker from "faker";

const GamingView = () => {
  return (
    <ContainerMainNavigator>
      <LayoutsDrawer.Drawer>
      <LayoutsDrawer.GridColumn variant="left-rail fluid">
            <LayoutsDrawer.LeftRail compact>
              <ContainerOptionsNavigation />
            </LayoutsDrawer.LeftRail>
            <Wrapper />
            <Wrapper p="40px">
              <ScrollingSlider title="Suggested live now">
                    {Array(20).fill(0).map((e,i)=>{
                      return(
                        <Wrapper key={i} w="310px" m="0 10px 0 0"> 
                          <PreviewStreamWatchVideoCard  video="https://player.vimeo.com/external/459802291.sd.mp4?s=c846c0ef9292600014ca216aa0be31496974e3a6&profile_id=164" live totalViews={5} detailStream={{
                            avatar : faker.random.image(),
                            detail : "3D Juegos - Fortnite",
                            title : "Cordinando una nueva victoria en Warzone"
                          }} />
                        </Wrapper>
                      )
                    })}
              </ScrollingSlider>
              <ScrollingSlider title="Popular games">
                    {Array(20).fill(0).map((e,i)=>{
                      return(
                        <Wrapper key={i} w="180px" m="0 10px 0 0"> 
                          <PreviewStreamByUserProfileCard
                          description="oeapfje"
                          title="AmogUs Game by Juan"
                          image={faker.random.image()}
                          stringAvatars={[
                            faker.random.image(),
                            faker.random.image(),
                            faker.random.image(),
                            faker.random.image(),
                          ]}
                          textDetail="140 followers"
                          />
                          </Wrapper>
                      )
                    })}
              </ScrollingSlider>
              <ScrollingSlider title="Suggested live now">
                    {Array(20).fill(0).map((e,i)=>{
                      return(
                        <Wrapper key={i} w="310px" m="0 10px 0 0"> 
                          <PreviewStreamWatchVideoCard  video="https://player.vimeo.com/external/459802291.sd.mp4?s=c846c0ef9292600014ca216aa0be31496974e3a6&profile_id=164" live totalViews={5} detailStream={{
                            avatar : faker.random.image(),
                            detail : "holaaaaaaaa",
                            title : "holaaaaa"
                          }} />
                        </Wrapper>
                      )
                    })}
              </ScrollingSlider>
            </Wrapper>
        </LayoutsDrawer.GridColumn>
      </LayoutsDrawer.Drawer>
      <ChatTabExample/>
    </ContainerMainNavigator>
  );
};

export default GamingView;
