import { Entities } from "@root/models/entities";
import { PublicationModel } from "@root/models/schemas/PublicationSchema";

export default class NewsFeedManagement {

  async createNewsFeed(publication: Entities.PublicationByUser) {
    const { userPublished, ...restProps } = publication;
    const createNewsFeed = await PublicationModel.create({
      ...restProps,
      userPublished: {
        avatar: userPublished?.avatar,
        fullName: userPublished?.fullName,
      },
    });
    return createNewsFeed.toJSON();
  }

  async deleteOneNewsFeed(publication: Entities.Publication) {
    const deleteNewsFeed = await PublicationModel.remove({
      _id: publication._id,
    });
    return deleteNewsFeed.deletedCount;
  }

  async getAllNews({ skip, limit }: { skip: number; limit: number }) {
    const getNewsFeed = await PublicationModel.find({}).select({
      comments : 0,
      updatedAt : 0,
      __v : 0
    }).skip(+skip).limit(+limit);
    return getNewsFeed;
  }

  async getOneNews(newsId : string) {
    const getOneNewsFeed = await PublicationModel.findOne({
      _id : newsId
    });
    return getOneNewsFeed;
  }

}
