import React from 'react'

import { isBoolean } from '../utils'

const Output = ({ res }) => {
  const htmlEl = Array.isArray(res) ? res.map((el, i) => <p key={i}>{el}</p>) : isBoolean(res) ? (res ? <p>{'yeah yeah sure'}</p> : <p>{'nahh'}</p>) : <p>{res}</p>
  return (
    <div className="terminal_output">
      {htmlEl}
    </div>
  )
}

export default Output