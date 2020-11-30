import { Meta } from '@storybook/react/types-6-0';
import MarketplaceCard from '..';

export default {
  title: 'Globals/MarketplaceCard',
  component: MarketplaceCard,
} as Meta;

export const Default = () => (
  <MarketplaceCard />
);
