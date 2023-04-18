import { Meta } from "@storybook/react/types-6-0";
import faker from "faker";
import ChatTab from "..";

export default {
  title: "Globals/ChatTab",
  component: ChatTab
} as Meta;

const dataTest = Array(20)
  .fill(0)
  .map(() => ({
    title: faker.name.findName(),
    image: faker.random.image()
  }));

const dataTest2 = Array(20)
  .fill(0)
  .map(() => ({
    title: faker.name.lastName(),
    image: faker.random.image()
  }));

export const Default = () => (
  <ChatTab
    filterOptions={{
      friends: 0,
      actives: 1
    }}
    selectedFilterOption={0}
    onSearch={(data, value) =>
      data.filter((item) => item.title.includes(value))
    }
    onSelectedOption={({ optionId, fillData }) => {
      fillData(optionId === 0 ? dataTest : dataTest2);
    }}
  >
    <ChatTab.Options>
      {(props) => (
        <>
          <ChatTab.Option optionId={props.friends} text="Friends" />
          <ChatTab.Option optionId={props.actives} text="Active (52)" />
        </>
      )}
    </ChatTab.Options>
    <ChatTab.List>
      {(data, options) => (
        <ChatTab.ListItem
          key={options.key}
          style={options.style}
          image={data.image}
          text={data.title}
        />
      )}
    </ChatTab.List>
  </ChatTab>
);
