import { Suspense } from "react"
import getChats from "../actions/getChats"
import Sidebar from "../components/sidebar/Sidebar"
import ChatList from "./components/ChatList"
import UserLoader from "../components/UserLoader"

export default async function ChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const chats = await getChats()
  return (
    <Sidebar>
      <Suspense fallback={<UserLoader />}>
        <ChatList chats={chats} />
      </Suspense>
      <div className="h-full">{children}</div>
    </Sidebar>
  )
}
