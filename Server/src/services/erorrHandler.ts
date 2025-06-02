import { Request, Response } from "express"

const eroorHandler=(fn:Function)=>{
    return(req:Request,res:Response)=>{
        fn(req,res).catch((errorMonitor:Error)=>{
            res.status(500).json({
                message:"Internal error"
            })
            return
        })
    }
    
}

export default eroorHandler