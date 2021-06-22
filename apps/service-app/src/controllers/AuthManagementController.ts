import AuthManagement from "@root/repositories/AuthManagement";
import TokenAuthentication from "@root/security/TokenAuthentication";
import { Request, Response } from "express";

export const signInController = async (req: Request, res: Response) => {
    const auth = new AuthManagement();
    const request = await auth.signInUser(req.body);
    if(request) {
        return res.status(400).json({})
    }
    return res.json({
        token :TokenAuthentication.sign(request || {})
    });
};

export const signUpController = async (req: Request, res: Response) => {
    const auth = new AuthManagement();
    const request = await auth.signUpUser(req.body);
    if(request) {
        return res.status(400).json({})
    }
    return res.json(request);
};

export const verifyUserController = async (req: Request, res: Response) => {
  const auth = new AuthManagement();
  const request = await auth.verifyUser(req.params.userId);
  return res.json({
      status : request
  });
};
