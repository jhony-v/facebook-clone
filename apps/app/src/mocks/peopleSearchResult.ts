import { faker } from "@faker-js/faker";

export default {
  getPeople() {
    return [...Array(30)].map((e, i) => ({
      fullName: `${faker.person.firstName()} ${faker.person.lastName()}`,
      subtitle: `${i + 20}friends`,
      description:
        "Owner and Founder at HELLO Ma Khaing Ma ChoUniversity of Yangon Main",
      isFriend: false
    }));
  }
};
