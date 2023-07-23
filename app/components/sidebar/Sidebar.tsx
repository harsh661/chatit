import getCurrentUser from "@/app/actions/getCurrentUser"
import Footer from "../Footer"
import Navbar from "./Navbar"

async function Sidebar({ children }: { children: React.ReactNode }) {

  const currentUser = await getCurrentUser()

  if(!currentUser) return
  return (
    <div className="h-full">
      <Navbar currentUser={currentUser}/>
      <Footer />
      <main className="lg:pl-20 h-full">
        {children}
      </main>
    </div>
  )
}

export default Sidebar
