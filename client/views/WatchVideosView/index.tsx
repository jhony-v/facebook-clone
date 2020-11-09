import ContainerMainNavigator from '@fb-containers/ContainerMainNavigator';
import ContainerOptionsNavigation from '@fb-containers/ContainerOptionsNavigation';
import FlexWrapper from '@fb-components/FlexWrapper';
import Grid from '@fb-components/Grid';
import LayoutsDrawer from '@fb-components/LayoutsDrawer';
import Wrapper from '@fb-components/Wrapper';
import ChatTabExample from 'examples/ChatTab.example';
import { useTheme } from 'styled-components';
import ListWatchVideoGlobals from './components/ListWatchVideoGlobals';

const WatchVideosView = () => {
    const { layoutSizes } = useTheme();
    return (
        <ContainerMainNavigator>
        <LayoutsDrawer.Drawer>
          <Wrapper w="100%">
          <Grid sizeColumns={[layoutSizes.widthLeftRail,"1fr"]} >
            <LayoutsDrawer.LeftRail compact>
              <ContainerOptionsNavigation />
            </LayoutsDrawer.LeftRail>
            <Wrapper/>
            <FlexWrapper align="center" flexDirection="column">
                <Wrapper w="75%">
                  <ListWatchVideoGlobals/>
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
