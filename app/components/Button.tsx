import React from "react"

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset'
    label: string
}

const Button: React.FC<ButtonProps> = ({
    type,
    label
}) => {
  return (
    <button
      className="p-3 bg-accent-green hover:bg-hover-green rounded-md border border-hover-green outline-none my-5 transition-colors duration-200 font-medium"
      type={type}
    >
      {label}
    </button>
  )
}

export default Button
