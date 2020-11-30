import { Meta } from '@storybook/react/types-6-0';
import NewsFeedCard from '..';

export default {
  title: 'Globals/NewsFeedCard',
  component: NewsFeedCard,
} as Meta;

export const Default = () => (
  <NewsFeedCard />
);
