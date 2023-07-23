import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

interface NavItemProps {
    label: string
    href: string 
    icon: IconType
    inactiveIcon: IconType
    active: boolean | undefined
    onClick?: () => void
}

const Navitem: React.FC<NavItemProps> = ({
    label, href, icon: Icon, inactiveIcon: InactiveIcon, active, onClick
}) => {

  const handleClick = () => {
    if(onClick) return onClick()
  }

  return (
    <li onClick={handleClick} className={`${active ? 'text-accent-green lg:bg-transparent bg-accent-green/10 rounded-lg': 'text-white'} p-2`}>
      <Link href={href}>
        {active ? <Icon size={25}/>: <InactiveIcon size={25}/>}
      </Link>
    </li>
  )
}

export default Navitem