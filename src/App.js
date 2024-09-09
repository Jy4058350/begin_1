import React, { useState, useEffect } from 'react'

function TextInputComponent() {
  const [text, setText] = useState('')

  useEffect(() => {
    console.log(`Text changed: ${text}`)
  }, [text]) // `text`が変更されるたびにこの関数が実行されます

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder='Type something...'
      />
      <p>You typed: {text}</p>
    </div>
  )
}

export default TextInputComponent
