import ContainerMainNavigator from '@fb-components/ContainerMainNavigator';
import ContainerOptionsNavigation from '@fb-components/ContainerOptionsNavigation';
import FlexWrapper from '@fb-components/FlexWrapper';
import Grid from '@fb-components/Grid';
import LayoutsDrawer from '@fb-components/LayoutsDrawer';
import WatchVideoCard from '@fb-components/WatchVideoCard';
import Wrapper from '@fb-components/Wrapper';
import ChatTabExample from 'examples/ChatTab.example';
import { useTheme } from 'styled-components';

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
                      <WatchVideoCard/>
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
