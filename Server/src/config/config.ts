import{config} from 'dotenv'
config()


export const envConfig={
    port:process.env.PORT,
    connectionString : process.env.CONNECTION_STRING,
    jwt : process.env.JWT_SECRET_KEY,
    jwttime : process.env.JWT_EXPIRES_IN,
    email:process.env.EMAIL,
    password:process.env.PASSWORD,
    adminEmail:process.env.ADMIN_EMAIL,
    adminPassword:process.env.ADMIN_PASSWORD,
    adminuser:process.env.ADMIN_USERNAME,
    
}