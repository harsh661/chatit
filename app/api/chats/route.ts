import getCurrentUser from "@/app/actions/getCurrentUser"
import { NextResponse } from "next/server"
import prisma from "@/app/libs/prisma"

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser()
    const body = await request.json()
    const { userId } = body

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const availableChats = await prisma?.conversation.findMany({
      where: {
        OR: [
          {
            userIds: {
              equals: [currentUser.id, userId],
            },
          },
          {
            userIds: {
              equals: [userId, currentUser.id],
            },
          },
        ],
      },
    })

    const singleChat = availableChats[0]

    if(singleChat) return NextResponse.json(singleChat)

    const newChat = await prisma.conversation.create({
        data: {
            users: {
                connect: [
                    {
                        id: currentUser.id
                    },
                    {
                        id: userId
                    }
                ]
            }
        },
        include: {
            users: true
        }
    })
    return NextResponse.json(newChat)

  } catch (error) {
    return new NextResponse("Internal server error", { status: 500 })
  }
}
