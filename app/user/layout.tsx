import React, { Suspense } from "react"
import Sidebar from "../components/sidebar/Sidebar"
import getUsers from "../actions/getUsers"
import UserList from "./components/UserList"
import UserLoader from "../components/UserLoader"

export default async function UserLayour({
  children,
}: {
  children: React.ReactNode
}) {

  const users = await getUsers()
  return (
    <Sidebar>
      <Suspense fallback={<UserLoader />}>
        <UserList users={users}/>
      </Suspense>
      <div className="h-full">{children}</div>
    </Sidebar>
  )
}
