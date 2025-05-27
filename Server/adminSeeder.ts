import { envConfig } from "./src/config/config"
import User from "./src/database/models/userModel"
import bcrypt from 'bcrypt'
const adminSeeder=async()=>{
   const [data]= await User.findAll({
        where:{
            email:envConfig.adminEmail
        }
    })
    if(!data){
        await User.create({
    username:envConfig.adminuser,
    email: envConfig.adminEmail,
    password: bcrypt.hashSync(envConfig.adminPassword as string,10),
    role :"admin"

   })
   console.log("admin seeded!!")

    }
   else{
    console.log("Admin already seeded")
   }
}
export default adminSeeder