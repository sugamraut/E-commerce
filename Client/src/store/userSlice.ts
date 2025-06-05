import { createSlice,type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./types";

const initialState:User={
    name:"Sugam Raut",
    age:12
}
const userSlice=createSlice({
    name:"user",
    initialState: initialState,
    reducers:{
        setName(state:User,action:PayloadAction<string>){
            state.name=action.payload
            
        },
        setAge(state:User,action:PayloadAction<User>){
            state.age=12
        }
    }
})

export const {setName,setAge}=userSlice.actions
export  default userSlice.reducer