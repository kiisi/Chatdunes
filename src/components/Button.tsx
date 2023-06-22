import React from 'react'
import MiniSpinner from "./MiniSpinner"

interface ButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  onClick?: () => void
}

const Button:React.FC<ButtonProps> = ({children, loading, onClick}) => {


  return (
    <button className="w-full h-[50px] bg-primary text-white rounded-[6px] grid place-items-center" onClick={loading ? undefined : onClick}>
        { loading ? <MiniSpinner/> : children }
    </button>
  )
}

export default Button