'use client'

import { NextPage } from "next";
import InputField from "../ui/InputField";
import { useState } from "react";
import Link from "next/link";
import PhoneInput from "./PhoneInput";
import { ValidationResult } from "@/utils/validateInputs";
import { useRouter } from "next/navigation";

type Message = {text:string, type:'success' | 'error'};

const SignUpInputs: NextPage = () => {
  const[first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [emailorphone, setEmailorPhone] = useState('');
  const [username, setUsername] = useState('');
  const [confirm_password, setConfirm_password] = useState('');
  const [validation, setValidation] = useState<ValidationResult>({
    isValid:false,
    isEmail:false,
    isPhone:false,
    message:'',
    formattedPhone:''
  });
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [message, setMessage] = useState<Message | null>(null);
  const [loading, setloading] = useState<boolean>(false);

const handleSubmit = async (e:React.FormEvent) => {
  e.preventDefault();
  setloading(true);
  setMessage(null);

  if(!validation.isValid) {
    setMessage({text:'Please enter a valid email or phone number', type:'error'});
    setloading(false);
    return;
  }

  const payload = {
    username,
    first_name,
    last_name,
    password,
    confirm_password,
    email: validation.isEmail ? emailorphone : null,
    phone_number: validation.isPhone ? validation.formattedPhone || emailorphone : null
  };

  try{
    const res = await fetch('/api/auth/signup',{
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if(res.ok){
      setloading(false);
      setMessage({text:'Sign up successful! Redirecting...',type:'success'})
      router.push('/login');
    }else{
      if(process.env.NODE_ENV !== 'production'){
        console.log("Signup Failed:",data);
      }
      setMessage({text:data.detail|| "Sign up failed. Please try again.", type:'error'});
    }
    setloading(false);
  }catch(error) {
    if(process.env.NODE_ENV !== 'production'){
      console.log("Network error:",error)
    }
    setMessage({text:"Network error. Please check your connection.", type:'error'});
  }

};


  return(
    <div>
      <form onSubmit={handleSubmit} className="max-w-[400px] space-y-4">
        <div className="flex flex-col sm:flex-row gap-2 m-2">
          <InputField 
            type="text"
            placeholder="First name"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
          />
          <InputField 
            type="text"
            placeholder="Last name"
            value={last_name}
            onChange={(e => setLast_name(e.target.value))}
          />
        </div>
        <div className="flex flex-col m-2 gap-4">
            <InputField 
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <PhoneInput 
              value = {emailorphone}
              onChange = {(e) => setEmailorPhone(e.target.value)}
              setValidation={setValidation}
            />
            <InputField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e => setPassword(e.target.value))}
            />
              <InputField
              type="password"
              placeholder="Confirm password"
              value={confirm_password}
              onChange={(e => setConfirm_password(e.target.value))}
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
          <button 
          type="submit" 
          disabled={loading}
          className="btn-custom mb-2">
            {loading ?'Submitting....':'Create Account'}
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
        <p className="text-sm text-gray-600">
          By creating an account, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
      <p className="text-sm text-center">
        Already have an account? <Link href={'/auth/login'} className="text-blue-600">Sign in</Link>
      </p>
    </div>
    )
}

export default SignUpInputs; 