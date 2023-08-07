"use client"

import useRoutes from "@/app/hooks/useRoutes"
import React from "react"
import Navitem from "./Navitem"
import { User } from "@prisma/client"
import Avatar from "../Avatar"

interface NavbarProps {
  currentUser: User
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const routes = useRoutes()

  return (
    <div className="hidden bg-main-gray sm:flex sm:fixed sm:left-0 sm:inset-y-0 sm:w-20 pt-10 pb-5 justify-center">
      <nav className="flex flex-col justify-between items-center">
        <ul role="list" className="flex flex-col items-center gap-8">
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
        </ul>
        <Avatar user={currentUser}/>
      </nav>
    </div>
  )
}

export default Navbar
