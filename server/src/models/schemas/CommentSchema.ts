import { model, Schema, Document, Types } from "mongoose";
import { Entities } from "../entities";

export interface CommentDocument extends Entities.Comment, Document {}

export const CommentSchema = new Schema(
  {
    text: {
      type: String,
    },
    datetime: {
      type: String,
    },
    userId: {
      type: Types.ObjectId,
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
  },
  {
    versionKey: false,
  }
);

export const CommentModel = model<CommentDocument>("Comment", CommentSchema);
