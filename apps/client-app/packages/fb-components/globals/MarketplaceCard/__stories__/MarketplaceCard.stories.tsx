import { Meta } from "@storybook/react/types-6-0";
import faker from "faker";
import MarketplaceCard from "..";

export default {
  title: "Globals/MarketplaceCard",
  component: MarketplaceCard
} as Meta;

export const Default = () => (
  <MarketplaceCard
    image={faker.random.image()}
    description={faker.commerce.productDescription()}
    location="Peru"
    price="30"
    onClick={() => null}
  />
);
