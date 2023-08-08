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
        size={1}
        id={id}
        autoComplete={id}
        {...register(id, { required })}
        type="text"
        placeholder={placeholder}
        className="px-3 lg:px-5 bg-transparent outline-none w-full"
      />
    </div>
  )
}

export default MessageInput
