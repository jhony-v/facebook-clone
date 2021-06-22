import CommentNewsFeedManangement from "@root/repositories/CommentNewsFeedManagement";
import { Request, Response } from "express";

export const commentNewsFeedController = async (req : Request, res : Response) => {
    const { userId, publicationId, text, userPublished } = req.body;
    const comment = new CommentNewsFeedManangement();
    const request = await comment.createNewComment({
        publication: {
            _id: userId
        },
        user: {
            _id: publicationId
        },
        text,
        userPublished
    });
    return res.json(request);
}

export const deleteCommentOfNewsFeedController = async (req : Request, res : Response) => {
    const { commentId, publicationId } = req.body;
    const comment = new CommentNewsFeedManangement();
    const request = await comment.deleteCommentCreated({
        commentId,
        publicationId
    });
    return res.json({status:request});
}