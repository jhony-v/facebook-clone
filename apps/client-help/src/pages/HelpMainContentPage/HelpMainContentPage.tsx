import { RouteComponentProps, useParams } from "@reach/router";
import { FC, useEffect } from "react";
import SidebarNavigation from "../../components/SidebarNavigation";
import { useUpdateAtom } from "jotai/utils";
import { selectCurrentTabInitialState } from "../../stores/mainNavigation.store";
import WrapperContent from "../../components/WrapperContent";
import HelpMainPageExample from "./pages/HelpMainPageExample";

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
        <HelpMainPageExample/>
      </WrapperContent>
    </>
  );
};

export default HelpMainContentPage;
