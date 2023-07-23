'use client'

import useRoutes from '@/app/hooks/useRoutes'
import React from 'react'
import Navitem from './Navitem'

const Navbar = () => {
    const routes = useRoutes()
  return (
    <div className='hidden bg-main-gray lg:flex lg:fixed lg:left-0 lg:inset-y-0 lg:w-20 py-10 justify-center'>
        <nav className='flex flex-col justify-between'>
            <ul role='list' className='flex flex-col items-center gap-10'>
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
    </div>
  )
}

export default Navbar