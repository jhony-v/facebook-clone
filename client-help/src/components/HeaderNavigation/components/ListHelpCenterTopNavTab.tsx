import { navigate } from "@reach/router";
import { useAtom } from "jotai";
import { Fragment } from "react";
import { tabsAtom } from "../../../stores/mainNavigation.store";
import HelpCenterTopNavTab from "./HelpCenterTopNavTab";

const ListHelpCenterTopNavTab = () => {
  const [state] = useAtom(tabsAtom);
  return (
    <Fragment>
      {state.map((item) => (
        <HelpCenterTopNavTab
          key={item.id}
          item={item}
          onSelectOption={(e) => navigate(e.option.id)}
        />
      ))}
    </Fragment>
  );
};

export default ListHelpCenterTopNavTab;
