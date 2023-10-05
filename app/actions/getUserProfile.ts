import prisma from "../libs/prisma"

const getUserProfile = async (id: string) => {
  try {
    const userProfile = prisma.user.findUnique({
      where: {
        id: id,
      },
    })

    return userProfile
  } catch (error) {
    return null
  }
}

export default getUserProfile
