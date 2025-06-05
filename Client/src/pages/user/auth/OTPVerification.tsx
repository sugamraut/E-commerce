import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useAppDispatch } from '../../../store/hook'
import { OTPVerfiy } from '../../../store/authSlice'

function OTPVerification() {
    const dispatch=useAppDispatch()
   const [data,setData]=useState({
       email:"",
       OTP:""
       
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
            dispatch(OTPVerfiy(data))
            
        }
  return (
    <>
      <div className="max-w-md mx-auto border mt-20">
    <form className="bg-white shadow-md rounded px-8 py-6" onSubmit={handleSubmit}>
        <div className="mb-4 ">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">OTP:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="otp" type="text" placeholder="Enter OTP" onChange={handleChange}/>
        </div>
        <div className="flex items-center justify-between">
            <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Verify
             </button>
            <a className="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800" href="#">
                Resend OTP
            </a>
        </div>
    </form>
</div>
    </>
  )
}

export default OTPVerification




