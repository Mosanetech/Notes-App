'use client'

import { NextPage } from "next";
import InputField from "../InputField";
import { useState } from "react";
import Link from "next/link";
import PhoneInput from "./PhoneInput";
import { ValidationResult } from "@/utils/validateInputs";

const SignUpInputs: NextPage = () => {
  const[first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [emailorphone, setEmailorPhone] = useState('');
  const [validation, setValidation] = useState<ValidationResult>({
    isValid:false,
    isEmail:false,
    isPhone:false,
    message:'',
    formattedPhone:''
  });
  const [password, setPassword] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();

  if (!validation.isValid) {
    alert(`validation: ${first_name}, ${emailorphone}, ${last_name}, ${password}`);
    return;
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
        </div>
        <div className="text-center">
          <button type="submit" className="btn-custom mb-2">Create Account</button>
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
        Already have an account? <Link href={'/login'} className="text-blue-600">Sign in</Link>
      </p>
    </div>
    )
}

export default SignUpInputs; 