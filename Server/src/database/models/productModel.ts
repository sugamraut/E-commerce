import {Table,Column,Model,DataType, AllowNull} from 'sequelize-typescript'


@Table({
    tableName : "products", 
    modelName : "product", 
    timestamps : true
})

class product extends Model{
    @Column({
        primaryKey : true, 
        type : DataType.UUID, 
        defaultValue : DataType.UUIDV4
    })
    declare id:string

    @Column({
        type : DataType.STRING,
        allowNull:false
    })
    declare productname:string

    @Column({
        type : DataType.TEXT,
        allowNull: false
    })
    declare productDescription:string

    @Column({
        type : DataType.FLOAT,
        allowNull:false
    })
    declare productPrice:number 

    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    declare productTotalStock:number

    @Column({
        type:DataType.INTEGER
    })
    declare productDiscount:number

   @Column({
    type:DataType.STRING,
    allowNull:false
   })
   declare productImagrURL:string
    
}

export default product