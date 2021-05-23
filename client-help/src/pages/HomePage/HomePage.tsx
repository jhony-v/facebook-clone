import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { AppContentLayout } from "../../ui/layouts/AppContent";
import HelpTopicsPreview from "./sections/HelpTopicsPreview";
import HelpTopicsList from "./sections/HelpTopicsList";
import WrapperCenterContent from "../../components/WrapperCenterContent";
import DividerSection from "../../ui/DividerSection";
import HelpTopicSpacing from "./sections/HelpTopicSpacing";

const HomePage: FC<RouteComponentProps> = () => {
  return (
    <AppContentLayout>
      <WrapperCenterContent>
        <HelpTopicSpacing>
        <DividerSection title="How can we help you?">
          <HelpTopicsPreview />
        </DividerSection>
        </HelpTopicSpacing>
        <DividerSection title="Popular topics">
        <HelpTopicsList />
        </DividerSection>
      </WrapperCenterContent>
    </AppContentLayout>
  );
};

export default HomePage;
