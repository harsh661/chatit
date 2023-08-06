import { NextResponse } from "next/server"
import getCurrentUser from "./getCurrentUser"
import prisma from "@/app/libs/prisma"

export default async function getChats() {
  const currentUser = await getCurrentUser()

  if (!currentUser) return []
  try {
    const chats = await prisma.conversation.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        userIds: {
          has: currentUser.id,
        },
      },
      include: {
        users: true,
        messages: {
          include: {
            sender: true,
            seen: true,
          },
        },
      },
    })

    return chats
  } catch (error) {
    return []
  }
}
