import { APPLICATION_KEY } from "@root/config/environments";
import { NextFunction, Request, Response } from "express"

const verifyAppKeyMiddleware = (req: Request, res : Response, next : NextFunction) => {
    const applicationKey = req.headers['application-key'];
    if(applicationKey && applicationKey === APPLICATION_KEY) return next()
    return res.status(304).json({})
}

export default verifyAppKeyMiddleware
