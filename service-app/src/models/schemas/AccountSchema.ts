import { model, Schema, Document } from "mongoose";
import { Entities } from "../entities";

export type AccountDocument = Entities.Account & Document 

export const AccountSchema = new Schema<AccountDocument>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
},{
  timestamps : true,
  versionKey : false  
});

export const AccountModel = model<AccountDocument>("Account", AccountSchema);
