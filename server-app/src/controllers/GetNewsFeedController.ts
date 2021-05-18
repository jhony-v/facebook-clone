import NewsFeedManagement from "@root/repositories/NewsFeedManagement";
import { Request, Response } from "express";

export const getNewsFeedController = async (req: Request, res: Response) => {
  const { skip, limit } = req.query;
  const newsId  = req.params.newsId;
  const news = new NewsFeedManagement();

  const getMethodNews = newsId ? news.getOneNews(newsId) : news.getAllNews({
    skip: +(skip || 0),
    limit: +(limit || 10),
  });
  const request = await getMethodNews;
  return res.json(request);
};
