"use client"

import useConversation from "@/app/hooks/useConversation"
import axios from "axios"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { BiLink } from "react-icons/bi"
import { FiSend } from "react-icons/fi"
import MessageInput from "./MessageInput"

const Form = () => {
  const { conversationId } = useConversation()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", { shouldValidate: true })
    axios.post("/api/messages", { ...data, conversationId })
  }

  return (
    <div className="p-3 flex items-center w-full bg-main-gray">
      <div className="bg-white text-black p-2 rounded-full">
        <BiLink size={20} />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex items-center gap-2"
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Write a message"
        />
        <button className="bg-white text-black p-2 rounded-full">
          <FiSend size={20} />
        </button>
      </form>
    </div>
  )
}

export default Form
