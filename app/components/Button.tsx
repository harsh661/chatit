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
      className="p-3 bg-accent-green rounded-md border border-green-500 outline-none my-5"
      type={type}
    >
      {label}
    </button>
  )
}

export default Button
