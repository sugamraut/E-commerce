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

        }
    }
}
export default new categoryController
//if we doesnot have use static methon then we have to use new keyword in at the time of export but when we have mention the function static the we doesn't have to mention new keyword into the function at time of export the data