import { Router } from "express";
import * as auth from "@root/controllers/AuthManagementController";
import * as getUser from "@controllers/GetUserController";
import * as createNewsFeed from "@root/controllers/CreateNewsFeedController";
import * as getNewsFeed from "@root/controllers/GetNewsFeedController";
import { uploadMultipleFilesMiddleware } from "@root/middlewares/uploadMiddleware";
import verifyUserIsAuthenticateMiddleware from "@root/middlewares/verifyUserIsAuthenticateMiddleware";

const router = Router();

router.post("/auth/sign-in", auth.signInController);
router.post("/auth/sign-up", auth.signUpController);
router.get("/auth/verify/:userId", auth.verifyUserController);
router.get("/users/:userId?", getUser.getUserController);

router.post("/news-feed",uploadMultipleFilesMiddleware, createNewsFeed.createNewsFeedController);
router.get("/news-feed/:newsId?",uploadMultipleFilesMiddleware, getNewsFeed.getNewsFeedController);
router.delete("/news-feed", createNewsFeed.deleteNewsFeedController);

export default router;
