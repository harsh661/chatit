"use client"

import { Toaster } from "react-hot-toast"

const ToastProvider = () => {
  return (
    <Toaster
      toastOptions={{
        className: "",
        success: {
            style: {
                border: '1px solid #40bf86',
                background: '#242424',
                color: '#a9abad'
            }
        },
        error: {
            style: {
                border: '1px solid red',
                background: '#242424',
                color: '#a9abad'
            }
        }
      }}
    />
  )
}

export default ToastProvider
