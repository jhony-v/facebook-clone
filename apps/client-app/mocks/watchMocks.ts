import faker from "faker";

export default {
  getWatchs() {
    return [...Array(30)].map((_, i) => ({
      id: faker.random.uuid(),
      video:
        "https://player.vimeo.com/external/449623829.hd.mp4?s=82893a1e42c7c1b177128a86a6253b7c4d1f071f&profile_id=174",
      text: faker.lorem.paragraphs(2),
      createdAt: new Date(),
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
  getWatchById(watchId: string) {
    const post = this.getWatchs().filter((e) => e.id === watchId)[0];
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
