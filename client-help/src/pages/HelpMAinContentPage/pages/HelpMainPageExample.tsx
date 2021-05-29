import { useAtomValue } from "jotai/utils";
import HelpCenterAboutPageHeaderBanner from "../../../components/HelpCenterAboutPageHeaderBanner";
import WrapperCenterContent from "../../../components/WrapperCenterContent";
import Anchor from "../../../ui/Anchor";
import BaseText from "../../../ui/BaseText";
import BulletedList from "../../../ui/BulletedList";
import DividerSection from "../../../ui/DividerSection";
import Paragraph from "../../../ui/Paragraph";
import { currentNavigationContentAtom } from "../../../stores/mainNavigation.store"

const HelpMainPageExample = () => {
  const e = useAtomValue(currentNavigationContentAtom);
  return (
    <div>
      <HelpCenterAboutPageHeaderBanner
        pageTitle={e.text || ""}
        bannerURL="https://static.xx.fbcdn.net/assets/?revision=169610231193999&name=desktop-your-home-page-banner&density=1"
      />
      <WrapperCenterContent>
        <Paragraph>
          Friending on Facebook helps you stay connected with people you care
          about. Adding a friend means you may see each other’s activity in News
          Feed, Stories and Photos.
        </Paragraph>
        <Paragraph>
          When you want to add a friend on Facebook, keep in mind:
        </Paragraph>
        <BulletedList
          ordered={[
            <BaseText>
              You should send friend requests to people you know and trust. 
              <Anchor to="/" underline text="Add a friend" /> by
              searching for them or directly from
              <Anchor to="/" underline text="People You May Know" />
            </BaseText>,
            <BaseText>
              You can <Anchor to="/" underline text="control who can friend and follow you" /> by editing your
              privacy settings.
            </BaseText>,
            <BaseText>
              If you don’t want someone to see you on Facebook, learn how to
              <Anchor to="/" underline text="unfriend or block them." />
            </BaseText>,
            <BaseText>You can have up to <Anchor to="/" underline text="5,000 friends" /> at a time.</BaseText>,
          ]}
        />
        <Paragraph>
          If you'd like to see updates from people you find interesting but
          don't know personally, like a journalist or celebrity,
          <Anchor to="/" underline text="try following them instead." />
           If you're getting unwanted or inappropriate friend
          requests, you can <Anchor to="/" underline text="report the account." />
        </Paragraph>
        <DividerSection title="Popular articles">
          <Anchor
            to="/"
            weight
            text="How do I find and add friends on Facebook?"
          />
          <Anchor
            to="/"
            weight
            text="How do I create a list to organize my friends on Facebook?"
          />
          <Anchor
            to="/"
            weight
            text="How do I add friends to my Close Friends list on Facebook?"
          />
          <Anchor
            to="/"
            weight
            text="How do I add or remove friends from a list on Facebook?"
          />
          <Anchor
            to="/"
            weight
            text="How do I tag my friends at a location on Facebook?"
          />
        </DividerSection>
        <DividerSection title="Related Topics"></DividerSection>
      </WrapperCenterContent>
    </div>
  );
};

export default HelpMainPageExample;
