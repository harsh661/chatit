import Form from "./components/form/Form"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center px-5">
      <div className="flex items-center absolute top-5">
        <Image width={50} height={50} src="/logo.png" alt="logo"/>
        <span className="font-bold">chatit</span>
      </div>
      <Form />
    </div>
  )
}
