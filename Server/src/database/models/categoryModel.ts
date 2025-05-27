import {Table,Column,Model,DataType} from 'sequelize-typescript'

@Table({
    tableName:"categories",
    modelName:"category",
    timestamps:true
})

class category extends Model{

   @Column({
        primaryKey : true, 
        type : DataType.UUID, 
        defaultValue : DataType.UUIDV4
   })
   declare id:string

    @Column({
        type:DataType.STRING,
        allowNull:false //requerid true flase
    })
    declare categoryName:string

}

export default category