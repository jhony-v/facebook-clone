import faker from "faker";

export default {
  getPreviewUserStories() {
    return [...Array(4)].map(() => ({
      user: {
        avatar: faker.random.image(),
        username: `${faker.name.firstName()} ${faker.name.lastName()} ${faker.name.lastName()}`,
        id: faker.random.uuid()
      },
      id: faker.random.uuid(),
      image: faker.random.image
    }));
  }
};
