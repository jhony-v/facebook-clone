import { faker } from "@faker-js/faker";

export const data = {
    text: faker.person.firstName(),
    src: faker.image.urlLoremFlickr({ category: "people" })
  }