"use client"

import { MessageType } from "@/app/types/ChatType"
import { useRef, useState } from "react"
import MessageBox from "./MessageBox"

interface ChatBodyProps {
  initialMessages: MessageType[]
}

const ChatBody: React.FC<ChatBodyProps> = ({ initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages)
  const slideRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex-1 overflow-y-auto flex flex-col p-2 gap-2">
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
