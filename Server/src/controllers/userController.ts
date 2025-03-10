import {Request,Response } from 'express'
import User from '../database/models/userModel';
import sequelize from '../database/config';
import bcrypt from 'bcrypt'
import generateToken from '../services/gennerateToken';
import generateOtp from '../services/generateOtp';

class UserController{
    static async register(req:Request,res:Response){
        //incoming user data receive 
        const {username,email,password} = req.body
        if(!username || !email || !password){
            res.status(400).json({
                message : "Please provide username,email,password"
            })
            return
        }
        // data --> users table ma insert garne 
        await User.create({
            username, 
            email, 
            password: bcrypt.hashSync(password,10),
    
        })
        
        // await sequelize.query(`INSERT INTO users(id,username,email,password) VALUES (?,?,?,?)`, {
        //     replacements : ['b5a3f20d-6202-4159-abd9-0c33c6f70487', username,email,password], 
        // })

        res.status(201).json({
            message : "User registered successfully"
        })
    }
    static async login(req:Request,res:Response){

        //accept the data-->email,password
        const {email,password}=req.body

        if(!email||!password){
            res.status(400).json({
                messsage:'please provide email,password'
            })
            return
        }
        //check email exist or not at first
        //[user] destructure the arry in to object
        const [user] =await User.findAll({// find in moongosse is equal to findAll in postgress it return in array, and findById ies equal to findByPk it return data in objrct
            where:{
                email:email
            }
        }) 
        
        if(!user){
            res.status(404).json({
                message:"no user with that email😢😢"
            })
        }else{
            //if yes-->email exist->check password too
             const isEqual=bcrypt.compareSync(password,user.password)
            if(!isEqual){
                res.status(400).json({
                    message:"Invalid password😢😢😢"
                })

            }else{
                 //if yes-->corret give access the token generate(JWT)
                 const token= generateToken(user.id)
                res.status(200).json({
                    message:"logging in success 👍👍",
                    token:token
                })
            }

        }

       
        
    }

    static async handleForgetPassword(req:Request,res:Response){
        const {email}=req.body
        if(!email) 
            return res.status(400).json({message:"please provide email"})

        const [user]=await User.findAll({
            where:{
                email:email
            }
        })
        if(!user){
            return res.status(404).json({
                email:"Email not registered"
            })
        }
        //otp generate and send to mail
        const otp =generateOtp()
        

    }
}


export default UserController