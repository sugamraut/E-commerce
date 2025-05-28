import { promises } from "nodemailer/lib/xoauth2";
import category from "../database/models/categoryModel";
import {Request,Response } from 'express'



class categoryController{
    categoryData=[
        {
            categoryName:"Electronic"
        },
        {
            categoryName:"Groceries"
        },
        {
            categoryName:"foods"
        }
    ]
    async seedcategory():Promise<void>{
        const datas =await category.findAll()
        if(datas.length==0){
            await category.bulkCreate(this.categoryData)
            console.log("catogories seeded succefully")
        }
        else{
            console.log("categories is already seeded")
        }
        

    }
    async addCategory(req:Request,res:Response):Promise<void>{
        const {categoryName} = req.body
        if(!categoryName){
            res.status(400).json({
                message:"please provide the catagory"
            })
            return

        }
        await category.create({
            categoryName
        })
        res.status(200).json({
            message:"category created successfully"
        })
    }
    async getcategories(req:Request,res:Response):Promise<void>{
        const data=await category.findAll()
        res.status(200).json({
            message:"fetched categories",
            data
        })
    }
    async deletecategories(req:Request,res:Response):Promise<void>{
        const{id}=req.params
        if(!id){
            res.status(400).json({
                message:"please provide the id "
            })
            return
        }
        
        const data=await category.findAll({
        where:{
        id:id
        }
        })  //return the array
         
        //const data=await category.findByPk(id)//return tth object
        if(data.length==0){
            res.status(400).json({
                message:"no catageroy of that id"
            })
        }else{
            await category.destroy({
                where:{
                    id
                }
            })
            res.status(200).json({
                message:"catageroy deleted successfully"
            })
        }
    }

    async updatecategory(req:Request,res:Response):Promise<void>{
         const{id}=req.params
         const{categoryName}=req.body
        if(!id|| categoryName){
            res.status(400).json({
                message:"please provide the id "
            })
            return
        }
        
        const data=await category.findAll({
        where:{
        id:id
        }
        })  //return the array
         
        //const data=await category.findByPk(id)//return tth object
        if(data.length==0){
            res.status(400).json({
                message:"no catageroy of that id"
            })
        }else{
            await category.update({
                categoryName:categoryName
            },{
                where:{
                    id
                }
            })
            res.status(200).json({
                message:"categary updated succeffully"
            })

        }
    }
}
export default new categoryController
//if we doesnot have use static methon then we have to use new keyword in at the time of export but when we have mention the function static the we doesn't have to mention new keyword into the function at time of export the data