import { faker } from "@faker-js/faker";

export default {
  getContacts: () =>
    [...Array(30)].map(() => ({
      id: faker.string.uuid(),
      name: `${faker.person.firstName()} ${faker.person.lastName()}`,
      isOnline: true
    }))
};
