import { Entities } from "@root/models/entities";
import { CommentModel } from "@root/models/schemas/CommentSchema";
import { PublicationModel } from "@root/models/schemas/PublicationSchema";

export default class CommentNewsFeedManangement {

  async createNewComment({ text, publication, user, userPublished }: Entities.CommentNewsFeedMutation) {
    const createNewComment = await CommentModel.create({
      text,
      userPublished,
      user: user._id,
    });

    PublicationModel.update({ _id: publication._id },{
        $push: {
          comments: createNewComment._id,
        },
    });
    return createNewComment.isNew ? createNewComment : {};
  }


  async deleteCommentCreated(props : { commentId : string, publicationId : string }) {
    const request = await PublicationModel.updateOne({ _id : props.publicationId },{
        $pull : {
            comments : props.commentId
        }
    },() => {
        CommentModel.remove({ _id : props.commentId });
    })

    return request && props;
  }

}
