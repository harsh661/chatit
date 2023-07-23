import prisma from "@/app/libs/prisma"
import getSession from "./getSession"

export default async function getUsers() {
  const session = await getSession()

  if (!session) return []

  try {
    const users = await prisma?.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          email: session.user?.email,
        },
      },
    })

    return users
  } catch (error) {
    return []
  }
}
