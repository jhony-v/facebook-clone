import React from "react";
import ContactList from "@fb-components/ContactList";
import faker from "faker";
import { FiCamera, FiSearch, FiSettings } from "react-icons/fi";

const dataTest = Array(50)
  .fill(0)
  .map((e, i) => ({
    title: faker.name.findName() + " " + faker.name.lastName(),
    image: faker.random.image(),
  }));

const ContactListExample = () => {
  return (
    <div>
      <ContactList
        title="Contacts"
        data={dataTest}
        options={<>
            <ContactList.Option icon={FiCamera} onClick={()=>alert()} />
            <ContactList.Option icon={FiSearch} onClick={()=>alert(2)} />
            <ContactList.Option icon={FiSettings} onClick={()=>alert(3)} />
        </>}
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
    </div>
  );
};

export default ContactListExample;
