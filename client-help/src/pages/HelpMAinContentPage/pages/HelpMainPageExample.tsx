import React from 'react'
import HelpCenterAboutPageHeaderBanner from '../../../components/HelpCenterAboutPageHeaderBanner'
import WrapperCenterContent from '../../../components/WrapperCenterContent'
import BaseText from '../../../ui/BaseText'
import BulletedList from '../../../ui/BulletedList'
import DividerSection from '../../../ui/DividerSection'
import Paragraph from '../../../ui/Paragraph'
import TetraText from '../../../ui/TetraText'

const HelpMainPageExample = () => {
    return (
        <div>
            <HelpCenterAboutPageHeaderBanner
          pageTitle="Your photos and videos"
          bannerURL="https://static.xx.fbcdn.net/assets/?revision=169610231193999&name=desktop-your-home-page-banner&density=1"
        />
        <WrapperCenterContent>
          <Paragraph>
            Friending on Facebook helps you stay connected with people you care
            about. Adding a friend means you may see each other’s activity in
            News Feed, Stories and Photos.
          </Paragraph>
          <Paragraph>
            When you want to add a friend on Facebook, keep in mind:
          </Paragraph>
          <BulletedList
            ordered={[
              <BaseText>
                You should send friend requests to people you know and trust.
                Add a friend by searching for them or directly from People You
                May Know
              </BaseText>,
              <BaseText>
                You can control who can friend and follow you by editing your
                privacy settings.
              </BaseText>,
              <BaseText>
                If you don’t want someone to see you on Facebook, learn how to
                unfriend or block them.
              </BaseText>,
              <BaseText>You can have up to 5,000 friends at a time.</BaseText>,
            ]}
          />
          <Paragraph>
            If you'd like to see updates from people you find interesting but
            don't know personally, like a journalist or celebrity, try following
            them instead. If you're getting unwanted or inappropriate friend
            requests, you can report the account.
          </Paragraph>
          <DividerSection title="Popular articles">
          </DividerSection>
          <DividerSection title="Related Topics">
          </DividerSection>
          </WrapperCenterContent>
        </div>
    )
}

export default HelpMainPageExample
