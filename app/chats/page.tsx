'use client'

import React from 'react'
import Empty from '../components/Empty'
import useConversation from '../hooks/useConversation'

const Home = () => {
  const {isOpen} = useConversation()
  return (
    <div className={`lg:pl-80 h-full ${isOpen ? 'hidden': 'block'}`}> 
        <Empty />
    </div>
  )
}

export default Home