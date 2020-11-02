import NewsFeedManagement from "@root/repositories/NewsFeedManagement";
import { Request, Response } from "express";

export const createNewsFeedController = async (req : Request, res : Response) => {
    const { text, userId, avatar, fullName } = req.body;
    const data = {
        images : [ req.file.filename ],
        user: userId,
        text,
        userPublished : {
            avatar,
            fullName
        }
    }
    const news = new NewsFeedManagement();
    const request = await news.createNewsFeed(data)
    return res.json(request)
}

export const deleteNewsFeedController = async (req : Request, res : Response) => {
}   