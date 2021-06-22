import { UserModel } from "@root/models/schemas/UserSchema";

export default class UserManagement {
  async getOneUser(userId : string = "", username : string = "") {
    const user = await UserModel.findOne({
        account : userId
    })
    return user;
  }
}
