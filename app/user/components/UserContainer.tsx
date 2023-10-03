import { User } from '@prisma/client'
import React, { useCallback } from 'react'
import Avatar from '../../components/Avatar'
import { useRouter } from 'next/navigation'
import axios from 'axios'

interface UserContainerProps {
    data: User
}

const UserContainer: React.FC<UserContainerProps> = ({ data }) => {
  const router = useRouter()

  const handleClick = useCallback(() => {
    axios.post('/api/chats', {
      userId: data.id
    })
    .then((data) => router.push(`/chats/${data.data.id}`))
    .catch((error) => console.log(error.message))
  }, [data, router])

  return (
    <div onClick={handleClick} className='flex gap-5 sm:px-3 py-3 sm:hover:bg-lightest-gray/10 cursor-pointer rounded-md'>
        <Avatar user={data}/>
        <div className='flex flex-col justify-between'>
            <span className='text-sm font-bold'>{data.name}</span>
            <span className='text-xs text-dark-text font-medium'>{data.email}</span>
        </div>
    </div>
  )
}

export default UserContainer