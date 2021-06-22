import { model, Schema, Document } from "mongoose";
import { Entities } from "../entities";

export type PublicationDocument = Entities.PublicationByUser & Document;

export const PublicationSchema = new Schema({
  text: {
    type: String,
  },
  datetime: {
    type: String,
  },
  images: {
    type: [String],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  userPublished: new Schema(
    {
      fullName: {
        type: String,
      },
      avatar: {
        type: String,
      },
    },
    {
      versionKey: false,
      _id: false,
    }
  ),
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  reactions: [
    {
      typeReaction: String,
      valueId: String,
    },
  ],
});

export const PublicationModel = model<PublicationDocument>(
  "Publication",
  PublicationSchema
);
