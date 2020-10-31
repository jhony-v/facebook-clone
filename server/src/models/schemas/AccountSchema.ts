import { model, Schema, Document, Types, Model } from "mongoose";
import { Entities } from "../entities";

export type AccountDocument = Entities.Account & Document 

export const AccountSchema = new Schema<AccountDocument>({
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
});

export const AccountModel = model<AccountDocument>("Account", AccountSchema);
