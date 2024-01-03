import { faker } from "@faker-js/faker";

export default {
  getWatchs() {
    return [...Array(30)].map((_, i) => ({
      id: faker.string.uuid(),
      video:
        "https://player.vimeo.com/external/449623829.hd.mp4?s=82893a1e42c7c1b177128a86a6253b7c4d1f071f&profile_id=174",
      text: faker.lorem.paragraphs(2),
      createdAt: new Date(),
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
  getWatchById(watchId: string) {
    const post = this.getWatchs().filter((e) => e.id === watchId)[0];
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
