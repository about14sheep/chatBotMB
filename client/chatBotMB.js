document.addEventListener('DOMContentLoaded', _ => {
  const chatInput = document.querySelector('.chatBox_input')
  const submitButton = document.querySelector('.chatBox_submit')
  const socket = new WebSocket('ws://localhost:3000/api/messages')

  socket.addEventListener('open', e => {
    socket.send(moldMessage(1, 'what up pimp where the hoes at???'))
  })

  socket.addEventListener('message', e => {
    console.log('they sent us back this: ', e.data)
  })

  submitButton.addEventListener('click', e => {
    e.preventDefault()
    const msg = chatInput.value
    socket.send(moldMessage(1, msg))
  })
})

const moldMessage = (id, text) => JSON.stringify({ user: id, text: text, type: 'message' })