import { useState } from 'react'

export default function BuyClick() {
  const [pending, setPending] = useState(0)
  const [completed, setCompleted] = useState(0)

  async function handleClick() {
    setPending(n => n + 1)
    await delay(1000)
    setPending(n => n - 1)
    setCompleted(n => n + 1)
  }

  return (
    <>
      <h1>Pending: {pending}</h1>
      <h1>Completed: {completed}</h1>
      <button onClick={handleClick}>Buy</button>
    </>
  )
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
