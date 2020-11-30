import { Meta } from '@storybook/react/types-6-0';
import CreateNewPost from '..';

export default {
  title: 'Globals/CreateNewPost',
  component: CreateNewPost,
} as Meta;

export const Default = () => (
  <CreateNewPost />
);
