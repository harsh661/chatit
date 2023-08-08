import prisma from "../libs/prisma"
import getCurrentUser from "./getCurrentUser"

const getMessages = async( chatId: string ) => {
    try {
        const chats = prisma.message.findMany({
            where: {
                conversationId: chatId
            },
            include: {
                sender: true,
                seen: true
            },
            orderBy: {
                createdAt: 'asc'
            }
        })

        return chats
    } catch (error) {
        return []
    }
}

export default getMessages