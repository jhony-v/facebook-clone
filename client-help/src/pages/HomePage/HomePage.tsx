import React, { FC, Fragment } from "react";
import { RouteComponentProps } from "@reach/router";
import { AppContentLayout } from "../../ui/layouts/AppContent";
import HelpTopicsPreview from "./sections/HelpTopicsPreview";
import HelpTopicsList from "./sections/HelpTopicsList";
import WrapperCenterContent from "../../components/WrapperCenterContent";
import DividerSection from "../../ui/DividerSection";
import HelpTopicSpacing from "./sections/HelpTopicSpacing";

const sectionItems = [
  {
    Layout: HelpTopicSpacing,
    title: "How can we help you?",
    Section: HelpTopicsPreview,
  },
  {
    Layout: Fragment,
    title: "Popular topics",
    Section: HelpTopicsList,
  },
  {
    Layout: Fragment,
    title: "Looking for something else?",
    Section: HelpTopicsPreview,
  },
];

const HomePage: FC<RouteComponentProps> = () => {
  return (
    <AppContentLayout>
      <WrapperCenterContent>
        {sectionItems.map((item, index) => (
          <item.Layout key={index}>
            <DividerSection title={item.title}>
              <item.Section />
            </DividerSection>
          </item.Layout>
        ))}
      </WrapperCenterContent>
    </AppContentLayout>
  );
};

export default HomePage;
