import { model, Schema, Document, Types } from "mongoose";
import { Entities } from "../entities";

export interface AccountDocument extends Entities.Account, Document {}

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
    type: Types.ObjectId,
    ref: "User",
  },
});

export const AccountModel = model<AccountDocument>("Account", AccountSchema);
