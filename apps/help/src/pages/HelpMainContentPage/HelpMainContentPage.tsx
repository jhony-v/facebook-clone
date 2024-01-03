import { useParams } from "react-router-dom";
import { useEffect } from "react";
import SidebarNavigation from "../../components/SidebarNavigation";
import { useSetAtom } from "jotai";
import { selectCurrentTabInitialState } from "../../stores/mainNavigation.store";
import WrapperContent from "../../components/WrapperContent";
import HelpMainPageExample from "./pages/HelpMainPageExample";

const HelpMainContentPage = () => {
  const onSelectCurrentTab = useSetAtom(selectCurrentTabInitialState);
  const params = useParams();

  useEffect(() => {
    onSelectCurrentTab(params.helpId);
  }, [params.helpId, onSelectCurrentTab]);

  return (
    <>
      <SidebarNavigation />
      <WrapperContent>
        <HelpMainPageExample />
      </WrapperContent>
    </>
  );
};

export default HelpMainContentPage;
