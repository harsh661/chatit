import Logo from "@/public/Logo"
import Form from "./components/form/Form"

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center px-5">
      <div className="flex items-center absolute top-0">
        <Logo />
        <span className="font-bold">chatit</span>
      </div>
      <Form />
    </div>
  )
}
