 import  jwt  from "jsonwebtoken"
import { envConfig } from "../config/config"

const generateToken=(userId:string)=>{
//tooken generaten
const secretkey:string=envConfig.jwt as string
const expiresIn:string = envConfig.jwttime || '1h';

 const token=jwt.sign({userId:userId},secretkey, {
    expiresIn : '2d'
})
return token
}

export default generateToken