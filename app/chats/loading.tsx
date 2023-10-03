import React from 'react'
import { BiLoaderAlt } from 'react-icons/bi'

const Loading = () => {
  return (
    <div className='sm:pl-20 lg:pl-80 w-full h-full flex items-center justify-center'>
        <span className='text-white animate-spin'>
            <BiLoaderAlt size={30}/>
        </span>
    </div>
  )
}

export default Loading