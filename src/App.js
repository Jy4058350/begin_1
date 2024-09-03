import { useState } from 'react'

export default function FeedbackForm() {
  function handleClick() {
    const nextName = prompt('What is your name?')

    alert(`Hello, ${nextName}!`)
  }

  return <button onClick={handleClick}>Greet</button>
}
