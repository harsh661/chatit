import prisma from "../libs/prisma"
import getCurrentUser from "./getCurrentUser"

const getMessages = async( chatId: string ) => {
    try {
        const currentUser = await getCurrentUser()

        if(!currentUser?.email) return null

        const chats = prisma.message.findMany({
            where: {
                id: chatId
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
        return null
    }
}

export default getMessages