import { model, Schema, Document } from "mongoose";
import { Entities } from "../entities";

export type UserDocument = Entities.User & Document;
export const UserSchema = new Schema({
  fullName: {
    type: String,
  },
  birthday: {
    type: String,
  },
  description: {
    type: String,
  },
  hobbies: [
    new Schema({
      name: {
        type: String,
      },
      description: {
        type: String,
      },
    }),
  ],
  account: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
});

export const UserModel = model<UserDocument>("User", UserSchema);
