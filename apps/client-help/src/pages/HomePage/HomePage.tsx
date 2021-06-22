import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { AppContentLayout } from "../../ui/layouts/AppContent";
import HelpTopicsPreview from "./sections/HelpTopicsPreview";
import HelpTopicsList from "./sections/HelpTopicsList";
import DividerSection from "../../ui/DividerSection";
import HelpCenterContentSpacing from "./sections/HelpCenterContentSpacing";
import HelpTopicsViewMore from "./sections/HelpTopicsViewMore";

const sectionItems = [
  {
    title: "How can we help you?",
    Section: HelpTopicsPreview,
  },
  {
    title: "Popular topics",
    Section: HelpTopicsList,
  },
  {
    title: "Looking for something else?",
    Section: HelpTopicsViewMore,
  },
];

const HomePage: FC<RouteComponentProps> = () => {
  return (
    <AppContentLayout>
      <HelpCenterContentSpacing>
        {sectionItems.map((item, index) => (
          <DividerSection title={item.title} key={index}>
            <item.Section />
          </DividerSection>
        ))}
      </HelpCenterContentSpacing>
    </AppContentLayout>
  );
};

export default HomePage;
