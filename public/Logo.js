import * as React from "react"
const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={64}
    width={64}
    {...props}
  >
    <path
      fill="#d65330"
      d="m43 45.1 4.4 3.6c.6.6 1.6.1 1.6-.7v-2.9h1c2.2 0 4-1.8 4-4v-13c0-2.2-1.8-4-4-4H30c-2.2 0-4 1.8-4 4v13c0 2.2 1.8 4 4 4z"
      style={{
        fill: "#2f5949",
        fillOpacity: 1,
      }}
    />
    <path
      fill="#f97850"
      d="m22 38-4.4 3.6c-.6.6-1.6.1-1.6-.7V38h-1c-2.2 0-4-1.8-4-4V21c0-2.2 1.8-4 4-4h20c2.2 0 4 1.8 4 4v13c0 2.2-1.8 4-4 4z"
      style={{
        fill: "#258c60",
        fillOpacity: 1,
      }}
    />
    <path
      d="M20 27a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2zM27 27a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2zM34 27a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2z"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
)
export default Logo
