"use client"

import Avatar from "@/app/components/Avatar"
import useGetUser from "@/app/hooks/useGetUser"
import { Conversation, User } from "@prisma/client"
import { useMemo } from "react"

interface HeaderProps {
  chat: Conversation & {
    users: User[]
  }
}

const Header: React.FC<HeaderProps> = ({ chat }) => {
  const otherUser = useGetUser(chat)

  const status = useMemo(() => {
    if(chat.isGroup) {
        return `${chat.users.length} participants`
    }

    return 'Online'
  },[])

  return (
    <div className="px-5 py-3 border-b border-lighter-gray">
      <div className="flex items-center gap-5">
        <Avatar user={otherUser} />
        <div>
            <h2 className="font-medium">{otherUser.name}</h2>
            <span className="text-xs text-dark-text">{status}</span>
        </div>
      </div>
    </div>
  )
}

export default Header
