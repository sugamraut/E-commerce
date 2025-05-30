import { Request, Response } from "express";
import product from "../database/models/productModel";
import category from "../database/models/categoryModel";

interface ProductRequest extends Request{
    file?:{
        filename:string
    },
}
class ProductController{
  async createProduct(req:ProductRequest,res:Response):Promise<void>{
     const{productname,productDescription,productPrice,productTotalStock,productDiscount,categoryId}=req.body
     const filename=req.file? req.file.filename:"imagelinkhere"
     if(!productname||!productDescription||productPrice||productTotalStock||!productDiscount||!categoryId){
        res.status(400).json({
            message:"please provide productname,productDescription,productPrice,productTotalStock,productDiscount"

        })
        return
     }
    await product.create({
        productname,
        productDescription,
        productPrice,
        productTotalStock,
        productDiscount:productDiscount||0,
        categoryId,
        productImagrURL:filename
        
    })
    res.status(200).json({
        message:"product create successfully"

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
        message:"product fetched sucffuly",
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
        message:"product deleted sucffuly",
        data:datas
    })
}
    }
  

}

export default new ProductController