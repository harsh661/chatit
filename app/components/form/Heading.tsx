import React from 'react'

interface HeadingProps {
    title: string
    subtitle?: string
}

const Heading:React.FC<HeadingProps> = ({
    title, 
    subtitle
}) => {
  return (
    <div className='flex flex-col gap-2'>
        <h1 className='text-white text-2xl'>{title}</h1>
        <span className='text-sm text-lightest-gray'>{subtitle}</span>
    </div>
  )
}

export default Heading