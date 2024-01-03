import { faker } from "@faker-js/faker";

export default {
  getUsers() {
    return [...Array(100)].map(() => ({
      id: faker.string.uuid(),
      name: `${faker.person.firstName()} ${faker.person.lastName()}`
    }));
  }
};
