import faker from "faker";

export default {
  getContacts: () =>
    [...Array(30)].map(() => ({
      id: faker.random.uuid(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      isOnline: true
    }))
};
