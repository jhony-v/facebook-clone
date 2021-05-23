import { RouteComponentProps, useParams } from "@reach/router";
import  { FC, useEffect } from "react";
import SidebarNavigation from "../../components/SidebarNavigation";
import { useUpdateAtom } from "jotai/utils"
import { selectCurrentTabInitialState } from "../../stores/mainNavigation.store";

const HelpMainContentPage: FC<RouteComponentProps> = () => {
  const onSelectCurrentTab = useUpdateAtom(selectCurrentTabInitialState)
  const params = useParams();
  
  useEffect(() => {
    onSelectCurrentTab(params.helpId);
  },[params.helpId,onSelectCurrentTab])

  return (
    <>
      <SidebarNavigation />
    </>
  );
};

export default HelpMainContentPage;
