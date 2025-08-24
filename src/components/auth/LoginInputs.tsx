'use client'
import { NextPage } from "next";
import { useState } from "react";
import InputField from "../InputField";
import { ValidationResult } from "@/utils/validateInputs";
import PhoneInput from "./PhoneInput";
import Link from 'next/link'

const LoginInputs: NextPage = () => {
    const [password, setPassword] = useState('');
    const [emailorphone, setEmailorPhone] = useState('');
    const [validation, setValidation] = useState<ValidationResult>({
        isValid:false,
        isEmail: false,
        isPhone:false,
        message:'',
        formattedPhone:''
    });

    const handleSubmit = (e) =>{
        e.preventDefault;
        if(!validation.isValid){
            alert(`Login as: ${emailorphone} password: ${password}`)
        }
    }
    return(
        <div>
            <form action={handleSubmit} className="max-w-[400px] space-y-4 mb-2">
                <div className="flex flex-col gap-2 m-2">
                    <PhoneInput
                        value={emailorphone}
                        onChange={(e => setEmailorPhone(e.target.value))}
                        setValidation={setValidation}
                    />
                    <InputField
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e => setPassword(e.target.value))}
                    />
                </div>
                <div className="text-center">
                 <button type="submit" className="btn-custom">Login</button>
                </div>
            </form>
            <div className="mb-2 boder border-b-1 border-b-gray-600 pb-2">
                <p className="text-sm mb-2 bg-blue-100 p-2 opacity-90 rounded-xl">
                    <span className="font-bold">Phone number format:</span> 
                        Include country code(eg. +1, for US, +265 for MW)
                        <span className="block text-blue-600 mt-2">
                        Examples: +2659839345026, +442079460958, +33142685300
                    </span>
                </p>
            </div>
            <p className="text-sm text-center">
                Don&apos;t have an account? <Link href={'/signup'} className="text-blue-600">Sign up</Link>
            </p>
        </div>
    )
}

export default LoginInputs;