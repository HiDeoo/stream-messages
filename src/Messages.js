import { useEffect, useState } from 'preact/hooks'

import { DELAY_BETWEEN_MESSAGES } from './constants'
import { useInterval } from './hooks/useInterval'
import Message from './Message'

export default function Messages() {
  const [index, setIndex] = useState(0)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch('assets/messages.json')
      const data = await response.json()

      setMessages(data)
    }

    fetchMessages()
  }, [])

  useInterval(() => {
    setIndex((currentIndex) => {
      const nextIndex = currentIndex + 1

      return nextIndex < messages.length ? nextIndex : 0
    })
  }, DELAY_BETWEEN_MESSAGES * 1000)

  if (messages.length === 0) {
    return null
  }

  const { message, title } = messages[index]

  return <Message index={index} message={message} title={title} />
}
