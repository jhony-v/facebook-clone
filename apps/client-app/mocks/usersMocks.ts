import faker from "faker";

export default {
  getUsers() {
    return [...Array(100)].map(() => ({
      id: faker.random.uuid(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`
    }));
  }
};
