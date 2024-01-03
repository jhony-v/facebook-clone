import { faker } from "@faker-js/faker";

export default {
  getPreviewUserStories() {
    return [...Array(4)].map(() => ({
      user: {
        avatar: faker.image.url(),
        username: `${faker.person.firstName()} ${faker.person.lastName()} ${faker.person.lastName()}`,
        id: faker.string.uuid()
      },
      id: faker.string.uuid(),
      image: faker.image.url()
    }));
  }
};
