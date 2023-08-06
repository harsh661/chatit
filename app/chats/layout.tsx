import getChats from "../actions/getChats"
import Sidebar from "../components/sidebar/Sidebar"
import ChatList from "./components/ChatList"

export default async function ChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const chats = await getChats()
  return (
    <Sidebar>
      <ChatList chats={chats} />
      <div className="h-full">{children}</div>
    </Sidebar>
  )
}
