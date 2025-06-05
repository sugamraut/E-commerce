import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { setName } from '../../store/userSlice'

function Register() {
   const data= useAppSelector((store)=>store.user)
   console.log(data)
   const dispatch=useAppDispatch()
   dispatch(setName("hi"))
    //useDispatch()-->kunai acction trrigerr agrnu pory vane paaani
    //select garnu paryo selected * from ,find==>useSelector
  return (
    <h1>this is register page</h1>
  )
}

export default Register
