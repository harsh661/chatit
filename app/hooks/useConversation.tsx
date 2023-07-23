import { useParams } from 'next/navigation'
import React, { useMemo } from 'react'

const useConversation = () => {
    const params = useParams()

    const conversationId = useMemo(() => {
        if(!params?.conversationId) {
            return ''
        }

        return params?.conversationId as string
    }, [params?.conversationId])

    const isOpen = useMemo(() => !!conversationId, [conversationId])

    return useMemo(() => ({
        conversationId,
        isOpen
    }), [conversationId, isOpen])
}

export default useConversation