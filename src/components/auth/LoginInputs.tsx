'use client'
import { NextPage } from "next";
import React, { useState } from "react";
import InputField from "../ui/InputField";
import { ValidationResult } from "@/utils/validateInputs";
import PhoneInput from "./PhoneInput";
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type Message = {text:string, type: 'success' | 'error'};

const LoginInputs: NextPage = () => {
    const [password, setPassword] = useState<string>('');
    const [emailorphone, setEmailorPhone] = useState<string>('');
    const [validation, setValidation] = useState<ValidationResult>({
        isValid:false,
        isEmail: false,
        isPhone:false,
        message:'',
        formattedPhone:''
    });
    const router = useRouter();
    const [message, setMessage] = useState<Message | null>(null);
    const [loading, setloading] = useState<boolean>(false);

    const handleSubmit = async (e:React.FormEvent) =>{
        e.preventDefault();
        setloading(true);
        setMessage(null); //reset previous message

        const payload = {
        identifier: validation.isEmail
            ? emailorphone
            : validation.isPhone
            ? validation.formattedPhone || emailorphone
            : null,
        password,
        };

        if(!payload.identifier || !password){
            setMessage({text:"Please enter valid credentials.", type:'error'})
            setloading(false);
            return;
        }

        try{
            const res = await fetch(`/api/auth/login`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await res.json()

            if (res.ok) {
                setMessage({text:"Login successful! Redirecting...", type:'success'});
                setloading(false);
                router.push(`/profile/${data.user?.id || 12}`);
            }else{
                setMessage({text:data.non_field_errors?.[0] || "Login failed. Please check yout credentials", type:'error'});
                setloading(false)
            }
        }catch(error){
            console.log("Network error:", error);
            setMessage({text:"Network error. please try check your connection.",type:'error'})
            setloading(false);
        }
    }
        
    return(
        <div>
            <form onSubmit={handleSubmit} className="max-w-[400px] space-y-4 mb-2">
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

                {/*Inline Message*/}
                {message && (
                    <div className={`p-2 rounded-md text-center font-medium ${message.type === 'success' ?'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {message.text}
                    </div>
                )
                }
                <div className="text-center">
                 <button type="submit" className="btn-custom" disabled={loading}>
                    {loading?'submitting...' :'login'}
                </button>
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
                Don&apos;t have an account? <Link href={'/auth/signup'} className="text-blue-600">Sign up</Link>
            </p>
        </div>
    )
}

export default LoginInputs;