import Avatar from "@/app/components/Avatar"
import useGetUser from "@/app/hooks/useGetUser"
import { ChatType } from "@/app/types/ChatType"
import { usePathname, useRouter } from "next/navigation"
import React, { useCallback, useMemo } from "react"

interface ChatContainerProps {
  data: ChatType
  selected?: boolean
}

const ChatContainer: React.FC<ChatContainerProps> = ({ data, selected }) => {
  const router = useRouter()
  const otherUser = useGetUser(data)
  const pathname = usePathname()

  const isSelected = pathname === `/chats/${data.id}`

  const handleClick = useCallback(() => {
    router.push(`/chats/${data.id}`)
  }, [data, router])

  const lastMessage = useMemo(() => {
    const messages = data.messages || []

    return messages[messages.length - 1]
  }, [data.messages])

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) {
      return "Sent an image"
    }

    if (lastMessage?.body) {
      return lastMessage?.body
    }

    return "Started a conversation"
  }, [lastMessage])

  return (
    <div
      onClick={handleClick}
      className={`flex gap-5 sm:px-3 py-3 sm:hover:bg-lightest-gray/10 cursor-pointer rounded-md ${
        isSelected && "bg-lightest-gray/10"
      }`}
    >
      <Avatar user={otherUser} />
      <div className="flex flex-col justify-between">
        <span className="text-sm font-bold">{otherUser.name}</span>
        <span className="text-xs text-dark-text font-medium">
          {lastMessageText}
        </span>
      </div>
    </div>
  )
}

export default ChatContainer
