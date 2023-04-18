import faker from "faker";

export default {
  getPeople() {
    return [...Array(30)].map((e, i) => ({
      fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      subtitle: `${i + 20}friends`,
      description:
        "Owner and Founder at HELLO Ma Khaing Ma ChoUniversity of Yangon Main",
      isFriend: false
    }));
  }
};
