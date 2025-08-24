'use client'

import { NextPage } from "next"
import { useEffect, useState } from "react"
import { Check, X} from "lucide-react"
import InputField from "../InputField"
import { validateEmailOrPhone, ValidationResult } from "@/utils/validateInputs"


interface PhoneInputProps {
  value: string,
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  setValidation: React.Dispatch<React.SetStateAction<ValidationResult>>;
}

const PhoneInput: NextPage<PhoneInputProps> = ({value, onChange}) => {

  const [validation, setValidation] = useState<ValidationResult>({
    isValid: false,
    isEmail: false,
    isPhone: false,
    message: '',
    formattedPhone: ''
  });

  //Validate email or phone input
  useEffect(() => {
    const result = validateEmailOrPhone(value);
    setValidation(result);
  }, [value]);

    return(
        <div>
          <InputField 
            type="text"
            placeholder='Email or Phone number'
            value={value}
            onChange={onChange}
            className={`w-full ${
              validation.isValid ? 'border-green-500' : value.length > 0 ? 'border-red-500' : ''
            }`}
          />

          <div className="flex items-center gap-2 text-sm">
            {validation.isValid ? (
              <Check className="text-green-600 w-4 h-4" />
            ) : value.length > 0 ? (
              <X className="text-red-600 w-4 h-4" />
            ) : null}

            <span className="text-gray-700">
              {validation.message}
            </span>
          </div>
        </div>
    );
}

export default PhoneInput;