"use client"

import useRoutes from "@/app/hooks/useRoutes"
import React from "react"
import Navitem from "./sidebar/Navitem"
import { useParams } from "next/navigation"
import Avatar from "./Avatar"
import { User } from "@prisma/client"

interface FooterProps {
  currentUser: User
}

const Footer: React.FC<FooterProps> = ({ currentUser }) => {
  const routes = useRoutes()
  const params = useParams()

  if (!!params.chatId) return

  return (
    <nav className="sm:hidden fixed bottom-0 w-full z-50 bg-main-gray">
      <ul role="list" className="flex justify-around items-center w-full py-2">
        {routes.map((item) => (
          <Navitem
            key={item.label}
            label={item.label}
            icon={item.icon}
            inactiveIcon={item.inactiveIcon}
            href={item.href}
            onClick={item.onClick}
            active={item.active}
          />
        ))}
        <Avatar user={currentUser} size={24} />
      </ul>
    </nav>
  )
}

export default Footer
