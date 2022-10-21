import faker from "faker";

export default {
  getProducts() {
    return [...Array(30)].map(() => ({
      id: faker.random.uuid(),
      image: faker.random.image(),
      title: faker.commerce.product(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(10, 500),
      location: faker.address.country()
    }));
  }
};
