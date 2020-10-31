import AuthManagement from "@root/repositories/AuthManagement";
import { Request, Response } from "express";

export const signInController = async (req: Request, res: Response) => {
    const auth = new AuthManagement();
    const request = await auth.signInUser(req.body);
    return res.json(request);
};

export const signUpController = async (req: Request, res: Response) => {
    const auth = new AuthManagement();
    const request = await auth.signUpUser(req.params);
    return res.json(request);
};

export const verifyUserController = async (req: Request, res: Response) => {
  const auth = new AuthManagement();
  const request = await auth.verifyUser(req.params.userId);
  return res.json({
      status : request
  });
};
