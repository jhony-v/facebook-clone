import faker from "faker";

export default {
  getPosts() {
    return [...Array(30)].map((_, i) => ({
      id: faker.random.uuid(),
      image: faker.random.image(),
      text: faker.lorem.paragraphs(2),
      createdAt: new Date().toLocaleDateString(),
      user: {
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        avatar: faker.random.image(),
        id: faker.random.uuid()
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
        total: faker.random.number(500),
        userReaction: {
          type: "Like",
          text: "like"
        }
      },
      comments: {
        total: faker.random.number(200)
      }
    }));
  },

  getPostById(postId: string) {
    const post = this.getPosts().filter((e) => e.id === postId)[0];
    return {
      ...post,
      list: [...Array(10)].map((_, i) => ({
        user: {
          name: faker.name.firstName(),
          avatar: faker.random.image(),
          id: faker.random.uuid()
        },
        message: faker.lorem.paragraph(1)
      }))
    };
  }
};
