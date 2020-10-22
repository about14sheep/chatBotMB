import React, { useState, useEffect } from 'react'
import { sendMessage } from '../App'

const Options = ({ options }) => {
  const [choices, setChoices] = useState([])
  const [selection, setSelection] = useState('')

  useEffect(_ => {
    const optionElements = options.map((el, i) => <div key={i} onClick={handleClick} ><span>{i}) </span><span>{el}</span></div>)
    if (optionElements) {
      setChoices(optionElements)
    }
  }, [options])

  useEffect(_ => {
    if (selection) {
      sendMessage(JSON.stringify({ type: 'USER_SELECT', data: selection }), 'message')
    }
  }, [selection])

  const handleClick = e => {
    setSelection(e.target.lastChild.textContent)
  }

  return (
    <div className="terminal_options">
      {choices}
    </div>
  )
}

export default Options