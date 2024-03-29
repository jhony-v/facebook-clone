import { faker } from "@faker-js/faker";
import { FiSearch, FiSettings } from "react-icons/fi";
import { RiVideoAddFill } from "react-icons/ri";
import ContactList from "@fb-components/globals/ContactList";

const dataTest = Array(50)
  .fill(0)
  .map(() => ({
    title: `${faker.person.firstName()} ${faker.person.lastName()}`,
    image: faker.image.url()
  }));

const ContainerOnlineContactFriendsList = () => (
  <ContactList
    title="Contacts"
    data={dataTest}
    options={
      <>
        <ContactList.Option icon={RiVideoAddFill} onClick={() => null} />
        <ContactList.Option icon={FiSearch} onClick={() => null} />
        <ContactList.Option icon={FiSettings} onClick={() => null} />
      </>
    }
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

export default ContainerOnlineContactFriendsList;
