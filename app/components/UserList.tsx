'use client'

import { User } from "@prisma/client"
import { FC } from "react"
import UserContainer from "./UserContainer"
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2"
interface UserListProps {
    users: User[]
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div className="sidebar-width fixed inset-y-0 p-5 border-r border-lighter-gray bg-alt-gray">
        <div className="flex flex-col gap-5">
            <div className="text-2xl text-white font-semibold">People</div>
            <input type="text" className="bg-lighter-gray border-none py-2 px-5 rounded-md placeholder:text-sm" placeholder="Search"/>
            <div className="flex flex-col gap-2">
                <span className="text-xs font-medium text-dark-text pt-5 flex items-center gap-1">
                    <HiChatBubbleOvalLeftEllipsis size={15}/>
                    AVAILABLE
                </span>
                {users.map((user) => (
                    <UserContainer key={user.id} data={user}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default UserList