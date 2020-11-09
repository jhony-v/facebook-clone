import ContainerMainNavigator from '@fb-containers/ContainerMainNavigator';
import ContainerOptionsNavigation from '@fb-containers/ContainerOptionsNavigation';
import FlexWrapper from '@fb-components/FlexWrapper';
import LayoutsDrawer from '@fb-components/LayoutsDrawer';
import Wrapper from '@fb-components/Wrapper';
import ChatTabExample from 'examples/ChatTab.example';
import ListWatchVideoGlobals from './components/ListWatchVideoGlobals';

const WatchVideosView = () => {
    return (
        <ContainerMainNavigator>
        <LayoutsDrawer.Drawer>
          <LayoutsDrawer.GridColumn variant="left-rail fluid">
            <LayoutsDrawer.LeftRail compact>
              <ContainerOptionsNavigation />
            </LayoutsDrawer.LeftRail>
            <Wrapper/>
            <FlexWrapper align="center" flexDirection="column">
                <Wrapper w="75%">
                  <ListWatchVideoGlobals/>
                 </Wrapper>   
            </FlexWrapper>
          </LayoutsDrawer.GridColumn>
        </LayoutsDrawer.Drawer>
        <ChatTabExample/>
      </ContainerMainNavigator>
      )
}

export default WatchVideosView
