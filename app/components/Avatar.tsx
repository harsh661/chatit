import { User } from "@prisma/client"
import Image from "next/image"
import React from "react"

interface AvatarProps {
  user: User
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <div className="w-10 h-10 relative">
      <span className="absolute bg-hover-green border-2 border-main-gray rounded-full w-3 h-3 z-10 right-0 bottom-0" />
      {user && (
        <Image
          width={40}
          height={40}
          src={user.image || "/user.png"}
          alt={user.name || 'user'}
          className="rounded-full"
        />
      )}
    </div>
  )
}

export default Avatar
