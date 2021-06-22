import TokenAuthentication from "@root/security/TokenAuthentication";
import { NextFunction, Request, Response } from "express";

const verifyUserIsAuthenticateMiddleware = async (req : Request, res: Response, next : NextFunction) => {
    const authorization = req.headers.authorization;
    const token = authorization?.replace("Bearer ","") || "";
    if(token?.trim() === "") {
        return res.status(304).json({
        })
    }
    const verifyToken = await TokenAuthentication.verify(token);
    if(verifyToken) {
        next();
    }
    return res.status(304).json({
    })
}

export default verifyUserIsAuthenticateMiddleware;