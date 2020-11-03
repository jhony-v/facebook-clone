import ContainerMainNavigator from '@fb-containers/ContainerMainNavigator';
import ContainerOptionsNavigation from '@fb-containers/ContainerOptionsNavigation';
import FlexWrapper from '@fb-components/FlexWrapper';
import Grid from '@fb-components/Grid';
import LayoutsDrawer from '@fb-components/LayoutsDrawer';
import WatchVideoCard from '@fb-components/WatchVideoCard';
import Wrapper from '@fb-components/Wrapper';
import ChatTabExample from 'examples/ChatTab.example';
import { useTheme } from 'styled-components';
import faker from "faker";
import { FaGlobeAsia } from "react-icons/fa";

const WatchVideosView = () => {
    const { layoutSizes, colors } = useTheme();
    return (
        <ContainerMainNavigator>
        <LayoutsDrawer.Drawer>
          <Wrapper w="100%">
          <Grid sizeColumns={[layoutSizes.widthLeftRail,"1fr"]} >
            <LayoutsDrawer.LeftRail style={{backgroundColor:colors.vgBlackAlpha00}}>
              <ContainerOptionsNavigation />
            </LayoutsDrawer.LeftRail>
            <Wrapper/>
            <FlexWrapper align="center" flexDirection="column">
                <Wrapper w="75%">

                  {Array(10).fill(0).map((e,i)=>(
                    <Wrapper p="5px 0" key={i}>
                      <WatchVideoCard 
                        text="¿Por Qué Iron Man No Usó A EDITH Contra Thanos En Avengers_ Endgame" 
                        video="https://player.vimeo.com/external/459802291.sd.mp4?s=c846c0ef9292600014ca216aa0be31496974e3a6&profile_id=164"
                        reactions={
                          <WatchVideoCard.DetailReactions reactions={[{reaction:"Like"},{reaction:"Haha"},{reaction:"Love"}]} />
                        }
                        >
                        <WatchVideoCard.Header user={{
                            avatar: faker.random.image(),
                            username: faker.name.title(),
                          }}
                          detail={{
                            icon: FaGlobeAsia,
                            text: "welcome",
                          }}/>
                      </WatchVideoCard>
                    </Wrapper>
                  ))}

                 </Wrapper>   
            </FlexWrapper>
          </Grid>
          </Wrapper>
        </LayoutsDrawer.Drawer>
        <ChatTabExample/>
      </ContainerMainNavigator>
      )
}

export default WatchVideosView
