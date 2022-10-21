import { Meta } from "@storybook/react/types-6-0";
import faker from "faker";
import Avatar from "@fb-components/common/Avatar";
import RowItemWithAvatarSelectable from "..";

export default {
  title: "Common/RowItemWithAvatarSelectable",
  component: RowItemWithAvatarSelectable
} as Meta;

export const Default = () => (
  <RowItemWithAvatarSelectable
    text="Row item with avatar"
    image={<Avatar src={faker.random.image()} />}
  />
);
