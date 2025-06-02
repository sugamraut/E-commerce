import { Table,Column,Model,DataType, PrimaryKey, Validate } from "sequelize-typescript";
import { OrderStatus } from "../../Globals/types";

@Table({
    tableName:"orders",
    modelName:"Order",
    timestamps:true
})

class Order extends Model{
    @Column({
        primaryKey : true, 
        type : DataType.UUID, 
        defaultValue : DataType.UUIDV4
    })
    declare id:string

    @Column({  
        type:DataType.STRING,
        allowNull:false,
        validate:{
            len:{
                args:[10,10],
                msg:"phone must be 10 digits.not greater then 10 digit"
            }
        }
      
    })
    declare phoneNumber : string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    declare shippingAddress :String
    @Column({
        type:DataType.FLOAT,
        allowNull:false
    })
    declare totalAmount :number
    @Column({
        type:DataType.ENUM(OrderStatus.Cancelled,OrderStatus.Delivered,OrderStatus.Ontheway,OrderStatus.Pending,OrderStatus.preparation),
        defaultValue:OrderStatus.Pending
})
declare orderStatus: string

}

export default Order