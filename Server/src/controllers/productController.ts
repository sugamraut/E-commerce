import { Request, Response } from "express";
import product from "../database/models/productModel";
import category from "../database/models/categoryModel";

// interface ProductRequest extends Request{
//     file?:{
//         filename:string,
//         filednmae:string
//     },
// }
class ProductController{
  async createProduct(req:Request,res:Response):Promise<void>{
        const {productName,productDescription,productPrice,productTotalStock,discount,categoryId} = req.body 
        console.log(req.file)
        const filename = req.file ? req.file.filename : "https://weimaracademy.org/wp-content/uploads/2021/08/dummy-user.png"
        if(!productName || !productDescription || !productPrice || !productTotalStock  || !categoryId){
            res.status(400).json({
                message : "Please provide productName,productDescription,productPrice,productTotalStock,discount,categoryId"
            })
            return
        }
        await product.create({
            productName,
            productDescription,
            productPrice,
            productTotalStock,
            discount : discount || 0,
            categoryId:categoryId, 
            productImageUrl : filename
        })
        res.status(200).json({
            message : "Product created successfully"
        })
    }
async getAllProduct(req:Request,res:Response):Promise<void>{
    const datas=await product.findAll({
        include:[{
            model:category
        }]
    })
    res.status(200).json({
        message:"product fetched sucffuly",
        data:datas
    })
}
async getsingleAllProduct(req:Request,res:Response):Promise<void>{
    const {id}=req.params
    const datas=await product.findAll({
        where:{
            id:id
        },
        include:[{
            model:category
        }]
    })
    res.status(200).json({
        message:"product fetched sucessfully",
        data:datas
    })
}async delectProduct(req:Request,res:Response):Promise<void>{
    const{id}=req.params
    const datas=await product.findAll({
        where:{
            id:id
        },
        include:[{
            model:category
        }]
    })
    if(datas.length==0){
        res.status(404).json({
            message:"Nosuch product"
        })
    }else{
        await product.destroy({
            where:{
                id:id
            }
        })
          res.status(200).json({
        message:"product deleted sucessfully",
        data:datas
    })
}
    }
  

}

export default new ProductController