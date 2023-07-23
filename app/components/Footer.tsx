"use client"

import useRoutes from "@/app/hooks/useRoutes"
import React from "react"
import Navitem from "./sidebar/Navitem"

const Footer = () => {
  const routes = useRoutes()
  return (
    <nav className="lg:hidden fixed bottom-0 w-full">
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
      </ul>
    </nav>
  )
}

export default Footer
