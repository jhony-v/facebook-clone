import requestTest from "../utils/requestTest";

describe("GET /users", () => {
  test("should get user by id", async () => {
      await requestTest.get("/users/").then((e) => {
        console.log(e.body);
      });
  });
});
