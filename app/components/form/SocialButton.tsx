import React from "react"
import { IconType } from "react-icons"

interface SocialButtonProps {
  icon: IconType
  onClick: () => void
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon: Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-3 bg-transparent text-white rounded-md border border-lighter-gray outline-none flex items-center justify-center gap-2 hover:bg-lightest-gray/10 transition-colors duration-200"
    >
      <Icon size={20} />
      Sign in with google
    </button>
  )
}

export default SocialButton
