import { Sequelize } from "sequelize-typescript";
import { envConfig } from "../config/config";


const sequelize=new Sequelize(envConfig.connectionString as string)
module:[__dirname + '/models']
 
try{
    sequelize.authenticate()
    .then(()=>{
        console.log("auth is right")
    })
    .catch(err=>{
        console.log("error aayo",err)
    })
}catch(error){
    console.log(error)

}
sequelize.sync({force :false}).then(()=>{
    console.log("synced !!")
})

export default sequelize
