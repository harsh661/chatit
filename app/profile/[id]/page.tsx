import getUserProfile from "@/app/actions/getUserProfile"
import Image from "next/image"

interface Iparams {
  id: string
}

const Profile = async ({ params }: { params: Iparams }) => {
  const userProfile = await getUserProfile(params.id)

  return (
    <div className="flex flex-col">
      <Image
        src={userProfile?.image || "/user.png"}
        width={200}
        height={200}
        alt={userProfile?.name as string}
      />
    </div>
  )
}

export default Profile
