import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

 interface Product{
    product:[] |productInfos[]

 }
 interface productInfos{
    productName:string,
    qty:number
 }
 const productInfo:Product={
    product:[]

 }

 const productSlice=createSlice({
    name:"product",
    initialState:productInfo,
    reducers:{
        setproduct(state:Product,action:PayloadAction){
            state.product=[{
                productName:"wai wai",
                qty:22
            }]
        }
    }
 })
 export const {setproduct}= productSlice.actions
 export default productSlice.reducer