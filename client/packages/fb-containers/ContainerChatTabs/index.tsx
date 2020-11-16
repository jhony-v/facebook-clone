import faker from "faker";
import TabChat from "@fb-components/ChatTab";
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


const ContainerChatTabs = () => {
    return (
        <TabChat
          filterOptions={{
            friends: 0,
            actives: 1,
          }}
          selectedFilterOption={0}
          onSearch={(data, value) => data.filter((item) => item.title.includes(value)) }
          onSelectedOption={({ optionId, fillData }) => {
              fillData(optionId === 0 ? dataTest : dataTest2);
          }}
        >
          <TabChat.Options>
            {(props) => (
              <>
                <TabChat.Option optionId={props.friends} text="Friends" />
                <TabChat.Option optionId={props.actives} text="Active (52)" />
              </>
            )}
          </TabChat.Options>
          <TabChat.List>
            {(data, options) => (
              <TabChat.ListItem
                key={options.key}
                style={options.style}
                image={data.image}
                text={data.title}
              />
            )}
          </TabChat.List>
        </TabChat>
      );
    }

export default ContainerChatTabs
