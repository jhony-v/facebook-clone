import { Request, Response } from "express";

export const getUserController = (req: Request, res: Response) => {
 const { userId } = req.params;
 return res.json({});
};
