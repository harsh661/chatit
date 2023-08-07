"use client"

import Avatar from "@/app/components/Avatar"
import useGetUser from "@/app/hooks/useGetUser"
import { Conversation, User } from "@prisma/client"
import Link from "next/link"
import { useMemo } from "react"
import { IoIosArrowBack } from 'react-icons/io'

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
    <div className="px-5 py-3 border-b border-lighter-gray flex items-center">
      <Link href={'/chats'} className="mr-2 lg:hidden">
        <IoIosArrowBack size={20} />
      </Link>
      <div className="flex items-center gap-3 lg:gap-5">
        <Avatar user={otherUser} />
        <div className="flex flex-col gap-0">
            <h2 className="font-medium text-sm lg:text-base">{otherUser.name}</h2>
            <span className="text-xs text-dark-text">{status}</span>
        </div>
      </div>
    </div>
  )
}

export default Header
