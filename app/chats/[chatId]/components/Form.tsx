"use client"

import { useState } from "react"
import useConversation from "@/app/hooks/useConversation"
import axios from "axios"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { BiLink } from "react-icons/bi"
import { FiSend } from "react-icons/fi"
import { BsEmojiSmile } from "react-icons/bs"
import EmojiPicker, { Theme } from "emoji-picker-react"
import MessageInput from "./MessageInput"
import { CldUploadButton } from "next-cloudinary"

const Form = () => {
  const { conversationId } = useConversation()
  const [emojiPickerShown, setEmojiPickerShown] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", { shouldValidate: true })
    axios.post("/api/messages", { ...data, conversationId })
  }

  const handleUpload = (result: any) => {
    axios.post("/api/messages", {
      image: result?.info?.secure_url,
      conversationId,
    })
  }

  const onEmojiClick = (emojiData: any) => {
    setEmojiPickerShown(false)
    if (watch("message")) {
      setValue("message", watch("message") + emojiData.emoji)
    } else {
      setValue("message", emojiData.emoji)
    }
  }

  return (
    <>
      {emojiPickerShown && (
        <div className="p-5 max-w-sm absolute bottom-14">
          <EmojiPicker
            onEmojiClick={onEmojiClick}
            width="100%"
            theme={Theme.DARK}
          />
        </div>
      )}
      <div className="p-3 flex items-center gap-3 w-full bg-main-gray">
        <CldUploadButton
          options={{ maxFiles: 1 }}
          onUpload={handleUpload}
          uploadPreset="ubwtuubf"
        >
          <div className="bg-white text-black p-2 rounded-full">
            <BiLink size={20} />
          </div>
        </CldUploadButton>
        <button
          onClick={() => setEmojiPickerShown((prev) => !prev)}
          className="bg-white text-black p-2 rounded-full"
        >
          <BsEmojiSmile size={20} />
        </button>
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
    </>
  )
}

export default Form
