import AccountControlSettings from '@fb-components/AccountControlSettings'
import HeaderNavigation from '@fb-components/HeaderNavigation'
import LayoutsDrawer from '@fb-components/LayoutsDrawer'
import Navigation from '@fb-components/Navigation'
import RootSearchEngine from '@fb-components/RootSearchEngine'
import Wrapper from '@fb-components/Wrapper'
import StoriesExample from "../../examples/Stories.example"
import CreateNewPostExample from "../../examples/CreateNewPost.example"
import ChatTabExample from "../../examples/ChatTab.example";
import dynamic from "next/dynamic"
import { SkeletonElementCard, SkeletonElementRow } from '@fb-components/LoadersSkeletonElement'

const AsyncOptionsNavigationList = dynamic(()=>import("@fb-components/OptionsNavigationList"),{
  loading : () =>  <SkeletonElementRow repeat={10} p="10px" />,
   ssr:false
}) 

const AsyncContactListExample = dynamic(()=>import("../../examples/ContactList.example"),{
  loading : () =>  <SkeletonElementRow repeat={10} p="10px" />,
   ssr:false
}) 

const AsyncNewsFeedExample = dynamic(()=>import("../../examples/NewsFeed.example"),{
  loading : () =>  <SkeletonElementCard repeat={10} />,
   ssr:false
}) 

const IndexView = () => {
    return (
        <>
        <HeaderNavigation>
          <RootSearchEngine/>
          <Navigation />
          <AccountControlSettings />
        </HeaderNavigation>
        <LayoutsDrawer.Drawer>
          <Wrapper>
            <LayoutsDrawer.Stories>
              <StoriesExample/>
            </LayoutsDrawer.Stories>
            <LayoutsDrawer.Feed>
                <CreateNewPostExample/>
                <AsyncNewsFeedExample/>
            </LayoutsDrawer.Feed>
          </Wrapper>
        </LayoutsDrawer.Drawer>
        <LayoutsDrawer.RightRail>
            <AsyncContactListExample/>
        </LayoutsDrawer.RightRail>
        <LayoutsDrawer.LeftRail>
          <AsyncOptionsNavigationList/>
        </LayoutsDrawer.LeftRail>
        <ChatTabExample/>
      </>
      )
}

export default IndexView
