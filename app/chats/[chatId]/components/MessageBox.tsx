import Avatar from "@/app/components/Avatar"
import { MessageType } from "@/app/types/ChatType"
import { useSession } from "next-auth/react"
import Image from "next/image"
import useWhatsAppTimeFormat from "@/app/hooks/useGetTime"
import {RiCheckFill, RiCheckDoubleFill} from 'react-icons/ri'

interface MessageBoxProps {
  isLast: boolean
  data: MessageType
}

const MessageBox: React.FC<MessageBoxProps> = ({ data, isLast }) => {
  const session = useSession()

  const isMyMessage = data?.sender?.email === session?.data?.user?.email

  const peopleSeen = (data.seen || [])
    .filter((user) => user.email !== data?.sender?.email)
    .map((user) => user.name)
    .join(", ")

  const body = `flex flex-col gap-1 text-sm ${isMyMessage && "items-end"}`

  const sentAt = useWhatsAppTimeFormat(data.createdAt)

  return (
    <div className={body}>
      <div className={`${isMyMessage ? 'bg-accent-green rounded-t-3xl rounded-bl-3xl rounded-br-sm': 'bg-lighter-gray rounded-t-3xl rounded-br-3xl rounded-bl-sm'} w-max p-3 max-w-[80%] flex flex-col`}>
        {data.body}
        {data.image && (
            <Image src={data.image} width={500} height={500} alt="message" className="rounded-2xl"/>
        )}
      </div>
      <span className="text-xs text-lightest-gray flex items-center gap-1">{sentAt}
          <span>
            {isLast && isMyMessage && peopleSeen.length > 0 && (
              <RiCheckDoubleFill size={15}/>
            )}
          </span>
      </span>
    </div>
  )
}

export default MessageBox
