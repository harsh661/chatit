import getChatsById from "@/app/actions/getChatsById"
import getMessages from "@/app/actions/getMessages"
import Empty from "@/app/components/Empty"
import Header from "./components/Header"
import ChatBody from "./components/ChatBody"
import Form from "./components/Form"

interface Iparams {
  chatId: string
}

const ChatId = async ({ params }: { params: Iparams }) => {
  const chat = await getChatsById(params.chatId)
  const messages = await getMessages(params.chatId)
  
  if (!chat)
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <Empty />
        </div>
      </div>
    )
  return (
    <div className="sm:pl-20 lg:pl-80 h-full bg-alt-gray">
      <div className="h-full flex flex-col">
        <Header chat={chat}/>
        <ChatBody initialMessages={messages}/>
        <Form />
      </div>
    </div>
  )
}

export default ChatId
