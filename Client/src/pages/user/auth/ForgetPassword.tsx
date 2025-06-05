import React, { type ChangeEvent, type FormEvent } from 'react'
import { useState } from 'react'
import { useAppDispatch } from '../../../store/hook'
import { forgotPassword } from '../../../store/authSlice'


function forgetPassword() {
    const dispatch=useAppDispatch()
     const [data,setData]=useState({
      email:""
      
    })

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target
        setData({
            ...data,
            [name]:value
        })

    }
    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
       dispatch(forgotPassword(data))
    }

  return (
    <>
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className=" bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
        <h1 className="text-center text-2xl font-bold mb-6">Forgot Password</h1>
        <form method='post' onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-white font-bold mb-2" htmlFor="email">
                    Email Address
                </label>
                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email address" onChange={handleChange}/>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                Reset Password
            </button>
        </form>
    </div>
</div>
      
    </>
  )
}

export default forgetPassword
