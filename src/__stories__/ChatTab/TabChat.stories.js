import React from 'react'
import ChatTab from "../../components/ChatTab"
import faker from "faker";

export default {
    title : "ChatTab",
}

const dataTest = Array(20)
  .fill(0)
  .map((e, i) => ({
    title: faker.name.findName(),
    image: faker.random.image(),
  }));

const dataTest2 = Array(20)
  .fill(0)
  .map((e, i) => ({
    title: faker.name.lastName(),
    image: faker.random.image(),
  }));


export const Default = () => {
  return (
    <ChatTab
      filterOptions={{
        friends: 0,
        actives: 1,
      }}
      selectedFilterOption={0}
      onSearch={(data, value) => data.filter((item) => item.title.includes(value)) }
      onOptionSelected={({ optionId, fillData }) => {
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
  );}

