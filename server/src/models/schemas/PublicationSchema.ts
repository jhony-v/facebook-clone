import { model, Schema, Document, Types } from "mongoose";
import { Entities } from "../entities";

export interface PublicationDocument extends Entities.PublicationByUser, Document {}

export const PublicationSchema = new Schema({
  text: {
    type: String,
  },
  datetime: {
    type: String,
  },
  image: {
    type: [String],
  },
  userId: {
    type: Types.ObjectId,
    ref: "User",
  },
  userPublished: new Schema(
    {
      fullName : {
        type : String
      },
      avatar : {
        type : String
      }
    },
    {
      versionKey: false,
      _id: false,
    }
  ),
  commentsId : [Types.ObjectId]
});

export const PublicationModel = model<PublicationDocument>("Publication", PublicationSchema);
