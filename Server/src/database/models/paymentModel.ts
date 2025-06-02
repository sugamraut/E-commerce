 import { Table,Column,Model,DataType, PrimaryKey, Validate } from "sequelize-typescript";
import { PaymentMethod, paymentStatus } from "../../Globals/types";

    @Table({
     tableName:"payments",
     modelName:"Payments",
     timestamps:true
 })
 class Payments extends Model{

        @Column({
        primaryKey : true, 
        type : DataType.UUID, 
        defaultValue : DataType.UUIDV4
    })
    declare id:string
    @Column({
        type:DataType.ENUM(PaymentMethod.COD,PaymentMethod.Esewa,PaymentMethod.khalti),
        defaultValue:PaymentMethod.COD
    })
    declare paymentMethod: String

    @Column({
        type :DataType.ENUM(paymentStatus.paid,paymentStatus.unpaid),
        defaultValue:paymentStatus.unpaid
    })
    declare paymentStatus:string

 }

 export default Payments

