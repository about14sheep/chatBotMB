import React, { useState } from 'react';
import { Terminal } from './components/Terminal';

const socket = new WebSocket('ws://localhost:3000/api/messages')

export const App = _ => {
  const [msg, setMsg] = useState([])
  socket.addEventListener('open', e => {
    refresh()
  })

  socket.addEventListener('message', e => {
    const data = JSON.parse(e.data)
    setMsg(data)
  })

  return (
    <Terminal msg={msg} />
  );
}

const moldMessage = (text) => JSON.stringify({ user: 1, text: text, type: 'message' })

export const refresh = _ => {
  sendMessage(JSON.stringify({ type: 'START_UP' }), 'message')
}

export const sendMessage = (text) => {
  socket.send(moldMessage(text))
}



