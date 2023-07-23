'use client'

import { usePathname } from "next/navigation"
import useConversation from "./useConversation"
import { useMemo } from "react"
import { signOut } from "next-auth/react"
import { HiUsers, HiOutlineUsers } from "react-icons/hi"
import { HiChatBubbleOvalLeftEllipsis, HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2"
import { TbLogout } from "react-icons/tb"

const useRoutes = () => {
    const pathname = usePathname()
    const { conversationId } = useConversation()

    const routes = useMemo(() => [
        {
            label: 'Chats',
            href: '/chat',
            icon: HiChatBubbleOvalLeftEllipsis,
            inactiveIcon: HiOutlineChatBubbleOvalLeftEllipsis,
            active: pathname === '/chat' || !!conversationId
        },
        {
            label: 'User',
            href: '/user',
            icon: HiUsers,
            inactiveIcon: HiOutlineUsers,
            active: pathname === '/user'
        },
        {
            label: 'Logout',
            href: '#',
            icon: TbLogout,
            inactiveIcon: TbLogout,
            onClick: ()=>signOut()
        }
    ], [pathname, conversationId])

    return routes
}

export default useRoutes