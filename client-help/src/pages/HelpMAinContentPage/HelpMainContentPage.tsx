import { RouteComponentProps, useParams } from "@reach/router";
import { FC, useEffect } from "react";
import SidebarNavigation from "../../components/SidebarNavigation";
import { useUpdateAtom } from "jotai/utils";
import { selectCurrentTabInitialState } from "../../stores/mainNavigation.store";
import WrapperContent from "../../components/WrapperContent";
import HelpCenterAboutPageHeaderBanner from "../../components/HelpCenterAboutPageHeaderBanner";
import WrapperCenterContent from "../../components/WrapperCenterContent";

const HelpMainContentPage: FC<RouteComponentProps> = () => {
  const onSelectCurrentTab = useUpdateAtom(selectCurrentTabInitialState);
  const params = useParams();

  useEffect(() => {
    onSelectCurrentTab(params.helpId);
  }, [params.helpId, onSelectCurrentTab]);

  return (
    <>
      <SidebarNavigation />
      <WrapperContent>
        <HelpCenterAboutPageHeaderBanner pageTitle="Your photos and videos" bannerURL="https://static.xx.fbcdn.net/assets/?revision=169610231193999&name=desktop-your-home-page-banner&density=1" />
        <WrapperCenterContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nobis ipsa corrupti soluta ratione saepe. Aut doloribus perspiciatis facilis assumenda recusandae asperiores molestiae! Cum, vel possimus atque excepturi cumque deleniti!
        </WrapperCenterContent>
      </WrapperContent>
    </>
  );
};

export default HelpMainContentPage;
