import { NextFunction, Request,Response } from "express";
import  jwt from "jsonwebtoken";
import { envConfig } from "../config/config";

class UserMiddleware{
    async isUserLoddedIn(req:Request,res:Response,next:NextFunction):Promise<void>{
          //recevied token
        const token = req.headers.authorization
         if(!token){
            res.status(400).json({
                message:'token must be provided'
            })
            return
         } 

          //validate token
          jwt.verify(token,envConfig.jwt as string,async (err,result)=>{
            if(err){
                res.status(400).json({
                    message:"invalid token!!"
                })
            }else{
                console.log(result)
                //@ts-ignore
                req.userId=result.userId
                next()
            }
          })



    }
}

export default new UserMiddleware