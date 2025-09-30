interface FieldInputProps {
    type?: string;
    placeholder?:string;
    className?:string;
    value?:string;
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}

const InputField: React.FC<FieldInputProps> = ({
    type = 'text',
    placeholder,
    className='',
    value,
    onChange

})=> {
    return(
        <input 
        type={type}
        placeholder={placeholder}
        className={`border-0 outline-1 rounded-sm px-1 outline-gray-300 bg-gray-100 ${className}`}
        value={value}
        onChange={onChange}
        required    
        />
    )
}

export default InputField;