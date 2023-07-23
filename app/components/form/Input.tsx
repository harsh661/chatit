import React from "react"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface InputProps {
  label: string
  id: string
  type?: string
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  disabled?: boolean
  placeholder: string
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  register,
  required,
  errors,
  type = "text",
  disabled,
  placeholder
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-lightest-gray" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id, {required})}
        className={`p-3 w-full bg-alt-gray rounded-md border border-lighter-gray placeholder:text-dark-text outline-none ${disabled && 'bg-lightest-gray opacity-50 cursor-not-allowed'} ${errors[id] && 'border border-red-500'}`}
      />
    </div>
  )
}

export default Input
