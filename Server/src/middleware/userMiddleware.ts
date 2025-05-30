import { NextFunction, Request,Response } from "express";
import  jwt from "jsonwebtoken";
import { envConfig } from "../config/config";
import User from "../database/models/userModel";
 export enum Role{
    Admin='admin',
    Customer='customer'
}
interface IExtendedRequest extends Request{
    user?:{
        username:string,
        email:string,
        role:string,
        password:string,
        id:string
    }
}

class UserMiddleware{
    async isUserLoddedIn(req:IExtendedRequest,res:Response,next:NextFunction):Promise<void>{
          //recevied token
        const token = req.headers.authorization
         if(!token){
            res.status(400).json({
                message:'token must be provided'
            })
            return
         } 

          //validate token
          jwt.verify(token,envConfig.jwt as string,async (err,result:any)=>{
            if(err){
                res.status(400).json({
                    message:"invalid token!!"
                })
            }else{
                
                const userData =await User.findByPk(result.userId)
                if(!userData){
                    res.status(404).json({
                        message:"No user with userId"
                    })
                    return
                }
                
                req.user = userData
                next()
            }
          })



    }
    restrictTo(...roles:Role[]){//it means rest operater and sore data in array
       return (req:IExtendedRequest,res:Response,next:NextFunction)=>{
         let userRole=req.user?.role as Role
         if(!roles.includes(userRole)){
            res.status(403).json({
                message:"Don't have permission!!!"
            })
            return
         }
         next()


       }
    }
}

export default new UserMiddleware