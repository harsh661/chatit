import { User } from "@prisma/client"
import Image from "next/image"
import React from "react"

interface AvatarProps {
  user: User
  size?: number
}

const Avatar: React.FC<AvatarProps> = ({ user, size }) => {
  return (
    <div className="">
      {user && (
        <Image
          width={size ? size : 40}
          height={size ? size : 40}
          src={user.image || "/user.png"}
          alt={user.name || "user"}
          className="rounded-full"
        />
      )}
    </div>
  )
}

export default Avatar
