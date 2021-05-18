import UserManagement from "@root/repositories/UserManagement";
import { Request, Response } from "express";

export const getUserController = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const user = new UserManagement();
  if (!userId) return res.status(400).json({});
  const request = await user.getOneUser(userId, userId);
  return res.json(request);
};
