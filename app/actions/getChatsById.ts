import prisma from "../libs/prisma"
import getCurrentUser from "./getCurrentUser"

const getChatsById = async( chatId: string ) => {
    try {
        const currentUser = await getCurrentUser()

        if(!currentUser?.email) return null

        const chats = prisma.conversation.findUnique({
            where: {
                id: chatId
            },
            include: {
                users: true
            }
        })

        return chats

    } catch (error) {
        return null
    }
}

export default getChatsById