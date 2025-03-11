import { Request, Response } from "express"
import sendResponse from "./sendResponse"


const checkOtpExpiration=(res:Response,otpGeneretedTime:string,thresholdtime:number)=>{

    const currentTime =Date.now()
 if((currentTime-parseInt(otpGeneretedTime)) <=thresholdtime){
            //otp expire vako xina
            sendResponse(res,200,"valid otp,now you can change password")
        }else{
            //expire vako cha
            sendResponse(res,403,"otp expire ,sorry try again later😢😢 ")
        }
}

export default checkOtpExpiration