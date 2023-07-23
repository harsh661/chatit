import { User } from '@prisma/client'
import React from 'react'
import Avatar from './Avatar'

interface UserContainerProps {
    data: User
}

const UserContainer: React.FC<UserContainerProps> = ({ data }) => {
  return (
    <div className='flex gap-5 p-3 border-b border-lighter-gray'>
        <Avatar user={data}/>
        <div className='flex flex-col justify-between'>
            <span className='text-sm font-bold'>{data.name}</span>
            <span className='text-xs text-dark-text font-medium'>Typing</span>
        </div>
    </div>
  )
}

export default UserContainer