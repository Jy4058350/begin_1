import { useState } from 'react'

export default function FeedbackForm() {
  const [name, setName] = useState('')

  function handleClick() {
    const nextName = prompt('What is your name?')
    setName(nextName)
    alert(`Hello, ${nextName}!`)
  }

  return <button onClick={handleClick}>Greet</button>
}
