import { faker } from "@faker-js/faker";

export default {
  getPosts() {
    return [...Array(30)].map((_, i) => ({
      id: faker.string.uuid(),
      image: faker.image.url(),
      text: faker.lorem.paragraphs(2),
      createdAt: new Date().toLocaleDateString(),
      user: {
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        avatar: faker.image.url(),
        id: faker.string.uuid()
      },
      reactionIcons: ["Like", "Love", "Haha"],
      reactionUser: {
        isReaction: i % 4 === 0,
        type: "Like",
        text: "like"
      },
      reactions: {
        types: ["Like", "Love", "Haha"],
        isReaction: i % 4 === 0,
        total: faker.string.numeric(500),
        userReaction: {
          type: "Like",
          text: "like"
        }
      },
      comments: {
        total: faker.string.numeric(200)
      }
    }));
  },

  getPostById(postId: string) {
    const post = this.getPosts().filter((e) => e.id === postId)[0];
    return {
      ...post,
      list: [...Array(10)].map((_, i) => ({
        user: {
          name: faker.person.firstName(),
          avatar: faker.image.url(),
          id: faker.string.uuid()
        },
        message: faker.lorem.paragraph(1)
      }))
    };
  }
};
