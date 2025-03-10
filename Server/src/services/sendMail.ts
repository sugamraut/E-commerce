import nodemailer from 'nodemailer'
import { envConfig } from '../config/config'

interface IData{
    to:string,
    subject:string,
    text:string
}
const sendMail=async(data:IData)=>{
    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:envConfig.email,
            pass:envConfig.password
        }
    })
    const mailOptions={
        from:"sugam raut<sugamraut9955@gmail.com>",
        to: data.to,
        subject : data.subject,
        text:data.text
    }
    try {
        await transporter.sendMail(mailOptions);

    } catch (error) {
        console.log(error)
    }
    

}

export default sendMail