import React from "react"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface MessageInputProps {
  id: string
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
  required: boolean
  placeholder: string
}

const MessageInput: React.FC<MessageInputProps> = ({
  id,
  register,
  errors,
  placeholder,
  required,
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        autoComplete={id}
        {...register(id, { required })}
        type="text"
        placeholder={placeholder}
        className="flex-1 px-3 lg:px-5 bg-transparent outline-none"
      />
    </div>
  )
}

export default MessageInput
