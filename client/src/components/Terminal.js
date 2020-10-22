import React, { useState, useEffect } from 'react'
import { isObject } from '../utils'
import Options from './options'
import Output from './output'


import './terminal.css'

export const Terminal = ({ msg }) => {
  const [options, setOptions] = useState([])
  const [botResponse, setBotResponse] = useState('')

  useEffect(_ => {
    if (!msg.data) return
    switch (msg.type) {
      case 'BOT_RESPONSE':
        if (isObject(msg.data)) {
          setOptions(Object.keys(msg.data))
        } else {
          setBotResponse(msg.data)
          setOptions(['Back'])
        }
        break
      default:
        setOptions(msg.data)
    }
  }, [msg])

  return (
    <div className="terminal_window">
      {botResponse ? <Output res={botResponse} /> : null}
      <Options options={options} />
    </div>
  )
}