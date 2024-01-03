import { faker } from "@faker-js/faker";

export default {
  getProducts() {
    return [...Array(30)].map(() => ({
      id: faker.string.uuid(),
      image: faker.image.url(),
      title: faker.commerce.product(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price({ min: 10, max: 5000 }),
      location: faker.location.country()
    }));
  }
};
