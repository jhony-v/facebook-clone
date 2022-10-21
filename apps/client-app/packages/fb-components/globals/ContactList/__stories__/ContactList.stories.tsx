import { Meta } from "@storybook/react/types-6-0";
import faker from "faker";
import ContactList from "..";

export default {
  title: "Globals/ContactList",
  component: ContactList
} as Meta;

const dataTest = Array(50)
  .fill(0)
  .map(() => ({
    title: `${faker.name.findName()} ${faker.name.lastName()}`,
    image: faker.random.image()
  }));

export const Default = () => (
  <ContactList
    data={dataTest}
    title="Contacts"
    sizes={{
      w: "300px",
      h: "400px"
    }}
  >
    {(data, options) => (
      <ContactList.ListItem
        key={options.key}
        style={options.style}
        image={data.image}
        text={data.title}
      />
    )}
  </ContactList>
);
