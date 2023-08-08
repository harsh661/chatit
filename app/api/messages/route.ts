import getCurrentUser from "@/app/actions/getCurrentUser"
import { NextResponse } from "next/server"
import prisma from "../../libs/prisma"
import { pusherServer } from "@/app/libs/pusher"

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser()

    const body = await request.json()

    const { conversationId, message, image } = body

    if (!currentUser || !currentUser?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const newMessage = await prisma.message.create({
      data: {
        body: message,
        image: image,
        conversation: {
          connect: {
            id: conversationId,
          },
        },
        sender: {
          connect: {
            id: currentUser.id,
          },
        },
        seen: {
          connect: {
            id: currentUser.id,
          },
        },
      },
      include: {
        seen: true,
        sender: true,
      },
    })

    const updatedMessage = await prisma.conversation.update({
      where: {
        id: conversationId,
      },
      data: {
        lastMessageAt: new Date(),
        messages: {
          connect: {
            id: newMessage.id,
          },
        },
      },
      include: {
        users: true,
        messages: {
          include: {
            seen: true,
          },
        },
      },
    })

    await pusherServer.trigger(conversationId, "messages:new", newMessage)

    const lastMessage =
      updatedMessage.messages[updatedMessage.messages.length - 1]

    updatedMessage.users.map((user) => {
      pusherServer.trigger(user.email!, "conversation:update", {
        id: conversationId,
        messages: [lastMessage],
      })
    })

    return NextResponse.json(newMessage)
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
