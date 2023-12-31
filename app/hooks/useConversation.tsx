import { useParams } from 'next/navigation'
import React, { useMemo } from 'react'

const useConversation = () => {
    const params = useParams()

    const conversationId = useMemo(() => {
        if(!params?.chatId) {
            return ''
        }

        return params?.chatId as string
    }, [params?.chatId])

    const isOpen = useMemo(() => !!conversationId, [conversationId])

    return useMemo(() => ({
        conversationId,
        isOpen
    }), [conversationId, isOpen])
}

export default useConversation