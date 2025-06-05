import React, { type ChangeEvent, type FormEvent } from 'react'
import { useState } from 'react'
import { loginUser } from '../../../store/authSlice'
import { useAppDispatch } from '../../../store/hook'
import { Link } from 'react-router-dom'

function Login() {
     const dispatch=useAppDispatch()
   const [data,setData]=useState({
      username:'',
      password:"",
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
         dispatch(loginUser(data))
    }

    

  return (
    <>
     <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
    <section className="flex w-[30rem] flex-col space-y-10">
        <div className="text-center text-4xl font-medium">Log In</div>
        <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="text" placeholder="Email or Username" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"onChange={handleChange}/>
        </div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="password" placeholder="Password" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"onChange={handleChange}/>
        </div>

        <button className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">LOG IN</button>

        <a href="#" className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</a>

        <p className="text-center text-lg">
            No account?
            <a href="/register" className="font-medium text-indigo-500 underline-offset-4 hover:underline">Create One</a>
        </p>
        </form>

    </section>
</main>
    </>
  )
}

export default Login
