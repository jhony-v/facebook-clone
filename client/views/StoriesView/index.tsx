import Wrapper from '@fb-components/common/Wrapper';
import AccountControlSettings from '@fb-components/globals/AccountControlSettings';
import FacebookCloseWithAvatar from '@fb-components/application/FacebookCloseWithAvatar';
import LayoutDrawerAbsoluteFullScreen from '@fb-components/layouts/LayoutsDrawer/LayoutDrawerAbsoluteFullScreen';
import LayoutDrawerFlexSidebar from '@fb-components/layouts/LayoutsDrawer/LayoutDrawerFlexSidebar';
import LayoutDrawerFlexFluid from '@fb-components/layouts/LayoutsDrawer/LayoutDrawerFlexFluid';
import ContainerViewUserStory from '@fb-containers/ContainerViewUserStory';
import dynamic from 'next/dynamic';
import { SkeletonElementRow } from '@fb-components/globals/LoadersSkeletonElement';

const AsyncContainerListUserStories = dynamic(() => import('@fb-containers/ContainerListUserStories'), {
  loading: () => <SkeletonElementRow repeat={10} />,
  ssr: false,
});

const StoriesView = () => (
  <Wrapper>
    <FacebookCloseWithAvatar onClose={() => null} />
    <AccountControlSettings hideButtonAccount />
    <LayoutDrawerAbsoluteFullScreen>
      <LayoutDrawerFlexSidebar>
        <AsyncContainerListUserStories />
      </LayoutDrawerFlexSidebar>
      <LayoutDrawerFlexFluid>
        <ContainerViewUserStory />
      </LayoutDrawerFlexFluid>
    </LayoutDrawerAbsoluteFullScreen>
  </Wrapper>
);

export default StoriesView;
