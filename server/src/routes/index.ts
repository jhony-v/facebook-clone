import { Router } from "express";
import * as auth from "@root/controllers/AuthManagementController";
import * as getUser from "@controllers/GetUserController";
import * as createNewsFeed from "@controllers/CreateNewsFeed";

const router = Router();

router.post("/auth/sign-in", auth.signInController);
router.post("/auth/sign-up", auth.signUpController);
router.get("/auth/verify/:userId", auth.verifyUserController);
router.get("/users/:userId?", getUser.getUserController);

router.post("/news-feed", createNewsFeed.createNewsFeedController);
router.delete("/news-feed", createNewsFeed.deleteNewsFeedController);

export default router;
