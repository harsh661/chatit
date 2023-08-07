"use client"

import useConversation from "@/app/hooks/useConversation"
import { ChatType } from "@/app/types/ChatType"
import { useRouter } from "next/navigation"
import { FC } from "react"
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2"
import ChatContainer from "./ChatContainer"
interface UserListProps {
  chats: ChatType[]
}

const ChatList: FC<UserListProps> = ({ chats }) => {
  const router = useRouter()
  const { isOpen, conversationId } = useConversation()

  return (
    <div
      className={`sidebar-width fixed inset-y-0 p-5 border-r border-lighter-gray bg-alt-gray ${isOpen && 'hidden lg:block'}`}
    >
      <div className="flex flex-col gap-5">
        <div className="text-2xl text-white font-semibold">Messages</div>
        <input
          type="text"
          className="bg-lighter-gray border-none py-2 px-5 rounded-md placeholder:text-sm"
          placeholder="Search"
        />
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium text-dark-text pt-5 flex items-center gap-1">
            <HiChatBubbleOvalLeftEllipsis size={15} />
            ALL MESSAGES
          </span>
          {chats.map((chat) => (
            <ChatContainer key={chat.id} data={chat} selected={conversationId === chat.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChatList
