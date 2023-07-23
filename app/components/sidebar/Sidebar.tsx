import Footer from "../Footer"
import Navbar from "./Navbar"

async function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <Navbar />
      <Footer />
      <main className="lg:pl-20 h-full">
        {children}
      </main>
    </div>
  )
}

export default Sidebar
