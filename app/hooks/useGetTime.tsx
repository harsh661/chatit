import React, { useEffect } from "react"
import moment from "moment"

const useWhatsAppTimeFormat = (initialDate: Date) => {
  const [formattedTime, setFormattedTime] = React.useState("")

  useEffect(() => {
    const convertToWhatsAppTimeFormat = () => {
      const parsedDate = moment(initialDate)

      const now = moment().utcOffset("+00:00")

      const diffInDays = now.diff(parsedDate, "days")
      if (diffInDays === 0) {
        setFormattedTime(parsedDate.format("h:mm A"))
      } else if (diffInDays === 1) {
        setFormattedTime("Yesterday")
      } else if (diffInDays <= 7) {
        setFormattedTime(parsedDate.format("dddd"))
      } else {
        setFormattedTime(parsedDate.format("MMM DD"))
      }
    }

    convertToWhatsAppTimeFormat()
  }, [initialDate])

  return formattedTime
}

export default useWhatsAppTimeFormat