import React, { useState, useEffect } from 'react'
import Options from './options'

import './terminal.css'

export const Terminal = ({ msg }) => {
  const [options, setOptions] = useState([])
  const [botResponse, setBotResponse] = useState('')

  useEffect(_ => {
    if (!msg.data) return
    switch (msg.type) {
      case 'BOT_RESPONSE':
        Object.prototype.toString.call(msg.data) === '[object Object]' ? setOptions(Object.keys(msg.data)) : setBotResponse(msg.data)
        break
      default:
        setOptions(msg.data)
    }
  }, [msg])

  return (
    <div className="terminal_window">
      <Options options={options} />
    </div>
  )
}