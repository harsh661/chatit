"use client"

import { MessageType } from "@/app/types/ChatType"
import { useEffect, useRef, useState } from "react"
import MessageBox from "./MessageBox"
import useConversation from "@/app/hooks/useConversation"
import axios from "axios"

interface ChatBodyProps {
  initialMessages: MessageType[]
}

const ChatBody: React.FC<ChatBodyProps> = ({ initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages)
  const slideRef = useRef<HTMLDivElement>(null)

  const {conversationId} = useConversation()

  useEffect(() => {
    axios.post(`/api/chats/${conversationId}/seen`)
  }, [conversationId])

  return (
    <div className="flex-1 overflow-y-auto flex flex-col p-2 sm:p-5 lg:p-10 gap-2">
      {messages.map((message, index) => (
        <MessageBox
          isLast={index === messages.length - 1}
          key={message.id}
          data={message}
        />
      ))}
      <div ref={slideRef} className="pt-24"/>
    </div>
  )
}

export default ChatBody
