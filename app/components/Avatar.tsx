import { User } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface AvatarProps {
  user: User
  size?: number
}

const Avatar: React.FC<AvatarProps> = ({ user, size }) => {
  return (
    <Link href={`/profile/${user.id}`}>
      {user && (
        <Image
          width={size ? size : 40}
          height={size ? size : 40}
          src={user.image || "/user.png"}
          alt={user.name || "user"}
          className="rounded-full"
        />
      )}
    </Link>
  )
}

export default Avatar
