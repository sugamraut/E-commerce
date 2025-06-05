import { createSlice,type PayloadAction } from "@reduxjs/toolkit";

interface User{
    name:string,
    age:number
}
const initialState:User={
    name:"manish basnet",
    age:12
}
const userSlice=createSlice({
    name:"user",
    initialState: initialState,
    reducers:{
        setName(state:User,action:PayloadAction<User>){
            state.name="hello"
            
        },
        setAge(state:User,action:PayloadAction<User>){
            state.age=12
        }
    }
})

export const {setName,setAge}=userSlice.actions
export  default userSlice.reducer