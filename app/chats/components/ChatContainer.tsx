import Avatar from "@/app/components/Avatar"
import useGetUser from "@/app/hooks/useGetUser"
import { ChatType } from "@/app/types/ChatType"
import React from "react"

interface ChatContainerProps {
  data: ChatType
  selected?: boolean
}

const ChatContainer: React.FC<ChatContainerProps> = ({ data, selected }) => {
  const otherUser = useGetUser(data)
  return (
    <div
      className="flex gap-5 sm:px-3 py-3 sm:hover:bg-lightest-gray/10 cursor-pointer rounded-md"
    >
      <Avatar user={otherUser}/>
      <div className="flex flex-col justify-between">
        <span className="text-sm font-bold">{otherUser.name}</span>
        <span className="text-xs text-dark-text font-medium">Typing</span>
      </div>
    </div>
  )
}

export default ChatContainer