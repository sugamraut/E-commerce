import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {Status, type StatusType } from "../globlas/types";

interface IUser{
    username:String,
        email:string,
        password:string

}
interface IAuthState{
    user:IUser,
    status:StatusType
    
}
const initialState:IAuthState={
    user:{
        username:"",
        email:"",
        password:"",

    },
    status: Status.LOADING
        
}
const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setUser(state:IAuthState,action:PayloadAction<IUser>){
            state.user=action.payload
        },
        setStatus(state:IAuthState,action:PayloadAction<StatusType>){
            state.status=action.payload
        }

    }
})

export const {setUser,setStatus}=authSlice.actions
export default authSlice.reducer