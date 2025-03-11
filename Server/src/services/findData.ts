

const findData= async(models:any,query:string)=>{
     const [result] =await models.findAll({
        where:{
            email : query
        }
     })
     return result
}

export default findData