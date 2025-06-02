import { Table,Column,Model,DataType, PrimaryKey, Validate } from "sequelize-typescript";
import { OrderStatus } from "../../Globals/types";

@Table({
    tableName:"orderDetails",
    modelName:"OrderDetails",
    timestamps:true
})

class OrderDetail extends Model{
     @Column({
            primaryKey : true, 
            type : DataType.UUID, 
            defaultValue : DataType.UUIDV4
        })
        declare id:string
    @Column({
        type: DataType.INTEGER,
        allowNull:false
    })
    declare quantiy: number

}

export default OrderDetail