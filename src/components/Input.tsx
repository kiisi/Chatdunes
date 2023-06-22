import React from 'react'

type InputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>

const Input:React.FC<InputProps> = ({  label, ...props}) => {

  return (
    <div className="relative pt-[10px]">
        <input className="border-[1px] border-[#dadce0] hover:border-[#3390ec] focus:border-[transparent] caret-[#3390ec] outline-none py-3 px-3 w-full rounded-[6px] auth-input" {...props}/>
        <label className="translate-y-[-10px] translate-x-[8px] bg-white px-[4px] absolute left-0 text-[14px] auth-label">{label}</label>
    </div>
  )
}

export default Input