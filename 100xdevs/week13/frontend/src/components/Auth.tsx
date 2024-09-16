import { SignupInput } from "@stains_leto/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({type} : { type : "signup" | "signin"}) => {
    const navigate = useNavigate()
    const [postInputs, setPostInputs] = useState <SignupInput>( {
        name : "",
        email : "",
        password: ""
    })

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === 'signup' ?'signup' : 'signin'}`, postInputs)
            const jwt = response.data;
            localStorage.setItem("token",jwt.token)
            navigate('/blogs')
        }
        catch(err){
            //alert the user
        }
    }

    return(
        <div className="h-screen flex justify-center items-center flex-col gap-4">
            <div className="flex flex-col gap-2">
                <h4 className=" text-2xl lg:text-3xl font-extrabold text-center">
                    { type === 'signup' ? 'Create an account' : 'Login to existing account' }
                </h4>
                 
                <div className="text-slate-400 text-center"> 
                    {type === 'signup' ? (
                        <h6>
                            Already have an account? 
                            <Link to="/signin" className="px-1 underline"> Login </Link>
                        </h6>
                    ) : 
                    (
                        <h6>
                            Don't have an account? 
                            <Link to="/signup" className="px-1 underline"> Signup </Link>
                        </h6>
                    )}
                </div>
                    
                
            </div>

            <div className="flex flex-col gap-2 w-10/12 lg:w-5/12">

                { type === 'signup' ? 
                    <LabelledInput label="Name" placeholder="Enter your name" type="text" onChange={ (e) => {
                        setPostInputs( existingVal => ({
                            ...existingVal, 
                            name : e.target.value
                        }))
                    }} />
                : null }
                <LabelledInput label="Email" placeholder="m@example.com" type="email" onChange={ (e) => {
                    setPostInputs( existingVal => ({
                        ...existingVal, 
                        email : e.target.value
                    }))
                }} />

                <LabelledInput label="Password" placeholder="Enter your password" type="password" onChange={ (e) => {
                    setPostInputs( existingVal => ({
                        ...existingVal, 
                        password : e.target.value
                    }))
                }} />

                <button onClick={sendRequest} type="button" className="text-xl bg-gray-800 rounded-md text-white py-2 font-bold mt-2">{type === "signup" ? "Signup" : "Signin" }</button>

            </div>
        </div>
    )
}

interface LabelledInputType{
    label : string;
    placeholder : string;
    onChange: (e : ChangeEvent<HTMLInputElement>) => void;
    type?: string
}

function LabelledInput({label,placeholder, onChange, type} :LabelledInputType ) {
    return(
        <div>
            <label className="block mb-2 text-xm font-medium text-gray-900 ">{label}</label>
            <input onChange={onChange} type={type} id={label} className="bg-gray-50 border border-gray-300 text-gray-900 test-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />     
        </div>
    )
}