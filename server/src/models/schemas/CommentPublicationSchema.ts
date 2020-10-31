import { model, Schema, Document } from "mongoose";
import { Entities } from "../entities";

export type AccountDocument = Entities.Account &  Document 

export const AccountSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const AccountModel = model<AccountDocument>("Account", AccountSchema);
